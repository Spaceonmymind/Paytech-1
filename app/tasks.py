from celery import Celery
from app.database import SessionLocal
from app import crud

celery_app = Celery('tasks', broker='redis://redis:6379/0')

@celery_app.task
def allocate_request(request_id: int):
    db = SessionLocal()
    crud.allocate_request(db, request_id)
