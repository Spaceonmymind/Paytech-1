from app.database import Base, engine
from app.models.employee import Employee
from app.models.request import Request

Base.metadata.create_all(bind=engine)
