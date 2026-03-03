from typing import Any, List

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
import structlog

from app.core import security
from app.db.session import get_db
from app.models.domain import Client, User
from app.schemas.domain import ClientCreate, ClientUpdate, ClientResponse

router = APIRouter()
logger = structlog.get_logger(__name__)

@router.get("/", response_model=List[ClientResponse])
def read_clients(
    db: Session = Depends(get_db),
    skip: int = 0,
    limit: int = 100,
    current_user: User = Depends(security.get_current_user),
) -> Any:
    """Retrieve all clients. Secured endpoint."""
    clients = db.query(Client).offset(skip).limit(limit).all()
    logger.info("clients_retrieved", count=len(clients), user_id=current_user.id)
    return clients


@router.post("/", response_model=ClientResponse)
def create_client(
    *,
    db: Session = Depends(get_db),
    client_in: ClientCreate,
    current_user: User = Depends(security.get_current_user),
) -> Any:
    """Create new client. Secured endpoint."""
    client = Client(
        business_name=client_in.business_name,
        contact_name=client_in.contact_name,
        contact_email=client_in.contact_email,
        contact_phone=client_in.contact_phone,
        service_tier=client_in.service_tier,
        status=client_in.status,
    )
    db.add(client)
    db.commit()
    db.refresh(client)
    logger.info("client_created", client_id=client.id, business=client.business_name, user_id=current_user.id)
    return client


@router.put("/{client_id}", response_model=ClientResponse)
def update_client(
    *,
    db: Session = Depends(get_db),
    client_id: int,
    client_in: ClientUpdate,
    current_user: User = Depends(security.get_current_user),
) -> Any:
    """Update a client. Secured endpoint."""
    client = db.query(Client).filter(Client.id == client_id).first()
    if not client:
        raise HTTPException(status_code=404, detail="Client not found")
        
    update_data = client_in.model_dump(exclude_unset=True)
    for field, value in update_data.items():
        setattr(client, field, value)
        
    db.add(client)
    db.commit()
    db.refresh(client)
    logger.info("client_updated", client_id=client.id, user_id=current_user.id)
    return client
