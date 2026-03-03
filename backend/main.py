from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from mangum import Mangum
import structlog

from app.api.api import api_router
from app.core.config import settings
from app.core.logging_setup import setup_logging
from app.db.session import engine, Base

# Set up structlog
setup_logging()
logger = structlog.get_logger(__name__)

# Note: In production, rely on Alembic migrations instead of create_all
# But for rapid development / initial setup, we do create_all:
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title=settings.PROJECT_NAME,
    openapi_url=f"{settings.API_V1_STR}/openapi.json"
)

# Set all CORS enabled origins
if settings.BACKEND_CORS_ORIGINS:
    app.add_middleware(
        CORSMiddleware,
        allow_origins=[str(origin) for origin in settings.BACKEND_CORS_ORIGINS],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

@app.get("/")
def root():
    return {"message": "Welcome to Pavika Enterprise Backend HQ"}

app.include_router(api_router, prefix=settings.API_V1_STR)

handler = Mangum(app, lifespan="off")

logger.info("application_startup_complete")
