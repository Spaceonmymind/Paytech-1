from fastapi import FastAPI
from app.routers import requests, employees

app = FastAPI()

app.include_router(requests.router, prefix="/requests", tags=["requests"])
app.include_router(employees.router, prefix="/employees", tags=["employees"])
