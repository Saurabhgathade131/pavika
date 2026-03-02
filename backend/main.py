from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from mangum import Mangum
import os
import json

app = FastAPI(title="Pavika Distribution Network API")

# Configure CORS for Vercel frontend + local dev
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://127.0.0.1:3000",
        "https://frontend-tau-ten-44.vercel.app",
        "https://*.vercel.app",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# In Lambda, /tmp is the only writable directory
UPLOAD_DIR = "/tmp/uploads"
os.makedirs(UPLOAD_DIR, exist_ok=True)


@app.get("/")
async def root():
    return {"message": "Welcome to Pavika Distribution Network API"}


@app.get("/api/health")
async def health_check():
    return {"status": "healthy"}


@app.post("/api/admin/upload")
async def upload_image(file: UploadFile = File(...)):
    """Handle image uploads from the admin dashboard"""
    try:
        file_path = os.path.join(UPLOAD_DIR, file.filename)
        contents = await file.read()
        with open(file_path, "wb") as buffer:
            buffer.write(contents)

        return {
            "filename": file.filename,
            "url": f"/api/media/{file.filename}",
            "status": "success",
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.get("/api/admin/media")
async def get_media():
    """List all uploaded media files"""
    try:
        files = os.listdir(UPLOAD_DIR)
        return {"files": [{"filename": f, "url": f"/api/media/{f}"} for f in files]}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


# Mangum handler wraps FastAPI for AWS Lambda + API Gateway
handler = Mangum(app, lifespan="off")
