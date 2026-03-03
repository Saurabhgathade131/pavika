import structlog
from datetime import timedelta
from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session

from app.core import security
from app.core.config import settings
from app.db.session import get_db
from app.models.domain import User
from app.schemas.domain import Token, UserCreate, UserResponse

router = APIRouter()
logger = structlog.get_logger(__name__)

@router.post("/login", response_model=Token)
def login_access_token(db: Session = Depends(get_db), form_data: OAuth2PasswordRequestForm = Depends()):
    """OAuth2 compatible token login, get an access token for future requests"""
    user = db.query(User).filter(User.email == form_data.username).first()
    
    if not user or not security.verify_password(form_data.password, user.hashed_password):
        logger.warning("login_failed", email=form_data.username)
        raise HTTPException(status_code=400, detail="Incorrect email or password")
    elif not user.is_active:
        logger.warning("inactive_user_login", email=form_data.username)
        raise HTTPException(status_code=400, detail="Inactive user")
        
    access_token_expires = timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    token = security.create_access_token(user.id, expires_delta=access_token_expires)
    
    logger.info("user_login_success", user_id=user.id, email=user.email)
    return {"access_token": token, "token_type": "bearer"}

@router.post("/setup-initial-admin", response_model=UserResponse)
def setup_initial_admin(admin_in: UserCreate, db: Session = Depends(get_db)):
    """Create initial admin. Only works if NO users exist yet."""
    if db.query(User).first():
        logger.warning("setup_admin_attempt_but_exists")
        raise HTTPException(status_code=400, detail="An admin user already exists. Use the secure endpoint to add more users.")
        
    user = User(
        email=admin_in.email,
        hashed_password=security.get_password_hash(admin_in.password),
        full_name=admin_in.full_name,
        is_superuser=True,
    )
    db.add(user)
    db.commit()
    db.refresh(user)
    logger.info("initial_admin_created", user_id=user.id, email=user.email)
    return user
