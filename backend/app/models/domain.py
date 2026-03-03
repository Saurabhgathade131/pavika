from sqlalchemy import Column, Integer, String, Boolean, DateTime
from sqlalchemy.sql import func
from app.db.session import Base

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True, nullable=False)
    hashed_password = Column(String, nullable=False)
    full_name = Column(String)
    is_active = Column(Boolean, default=True)
    is_superuser = Column(Boolean, default=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())

class Client(Base):
    __tablename__ = "clients"

    id = Column(Integer, primary_key=True, index=True)
    business_name = Column(String, index=True, nullable=False)
    contact_name = Column(String, nullable=False)
    contact_email = Column(String, index=True, nullable=False)
    contact_phone = Column(String)
    service_tier = Column(String, default="Standard")  # Standard, Enterprise, Elite
    status = Column(String, default="Active") # Active, Pending, Suspended
    created_at = Column(DateTime(timezone=True), server_default=func.now())
