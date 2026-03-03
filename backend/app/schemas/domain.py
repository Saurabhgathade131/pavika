from pydantic import BaseModel, EmailStr
from datetime import datetime
from typing import Optional

# --- User Schemas ---
class UserBase(BaseModel):
    email: EmailStr
    full_name: Optional[str] = None
    is_active: bool = True
    is_superuser: bool = False

class UserCreate(UserBase):
    password: str

class UserResponse(UserBase):
    id: int
    created_at: datetime
    
    model_config = {"from_attributes": True}

# --- Client Schemas ---
class ClientBase(BaseModel):
    business_name: str
    contact_name: str
    contact_email: EmailStr
    contact_phone: Optional[str] = None
    service_tier: str = "Standard"
    status: str = "Active"

class ClientCreate(ClientBase):
    pass

class ClientUpdate(ClientBase):
    business_name: Optional[str] = None
    contact_name: Optional[str] = None
    contact_email: Optional[EmailStr] = None

class ClientResponse(ClientBase):
    id: int
    created_at: datetime
    
    model_config = {"from_attributes": True}

# --- Auth Schemas ---
class Token(BaseModel):
    access_token: str
    token_type: str

class TokenPayload(BaseModel):
    sub: Optional[int] = None
