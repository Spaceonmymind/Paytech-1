from datetime import datetime
from typing import List, Optional
from pydantic import BaseModel

class EmployeeBase(BaseModel):
    name: str
    skill_level: int

class EmployeeCreate(EmployeeBase):
    pass

class Employee(EmployeeBase):
    id: int
    requests: List['Request'] = []

    class Config:
        orm_mode = True

class RequestBase(BaseModel):
    from_station: str
    to_station: str
    datetime: datetime
    status: str = "Pending"

class RequestCreate(RequestBase):
    pass

class Request(RequestBase):
    id: int
    employee_id: Optional[int] = None

    class Config:
        orm_mode = True
