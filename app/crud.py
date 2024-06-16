from sqlalchemy.orm import Session
from app.models import Request, Employee
from app.schemas import RequestCreate, EmployeeCreate

def create_employee(db: Session, employee: EmployeeCreate) -> Employee:
    db_employee = Employee(name=employee.name, skill_level=employee.skill_level)
    db.add(db_employee)
    db.commit()
    db.refresh(db_employee)
    return db_employee

def get_employee(db: Session, employee_id: int) -> Employee:
    return db.query(Employee).filter(Employee.id == employee_id).first()

def get_employees(db: Session, skip: int = 0, limit: int = 10):
    return db.query(Employee).offset(skip).limit(limit).all()

def create_request(db: Session, request: RequestCreate) -> Request:
    db_request = Request(
        from_station=request.from_station,
        to_station=request.to_station,
        datetime=request.datetime,
        status=request.status
    )
    db.add(db_request)
    db.commit()
    db.refresh(db_request)
    return db_request

def get_request(db: Session, request_id: int) -> Request:
    return db.query(Request).filter(Request.id == request_id).first()

def get_requests(db: Session, skip: int = 0, limit: int = 10):
    return db.query(Request).offset(skip).limit(limit).all()

def update_request(db: Session, request: Request, employee_id: int):
    request.employee_id = employee_id
    db.commit()
    db.refresh(request)
    return request

def get_best_employee(db: Session) -> Employee:
    return db.query(Employee).order_by(Employee.skill_level.desc()).first()

def allocate_request(db: Session, request_id: int):
    request = get_request(db, request_id)
    if request:
        best_employee = get_best_employee(db)
        if best_employee:
            update_request(db, request, best_employee.id)
    return request
