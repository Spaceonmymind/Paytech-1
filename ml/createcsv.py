import pandas as pd
import random
from datetime import datetime, timedelta

# Список станций метро
stations = [
    "Station A", "Station B", "Station C", "Station D",
    "Station E", "Station F", "Station G", "Station H"
]

# Список навыков сотрудников
skills = ["Skill 1", "Skill 2", "Skill 3", "Skill 4"]

# Генерация данных
data = []
num_records = 1000  # Количество записей

for _ in range(num_records):
    from_station = random.choice(stations)
    to_station = random.choice(stations)
    while to_station == from_station:
        to_station = random.choice(stations)

    # Случайное время в пределах последнего месяца
    datetime_request = datetime.now() - timedelta(days=random.randint(0, 30), hours=random.randint(0, 23),
                                                  minutes=random.randint(0, 59))

    # Навыки сотрудника
    skill = random.choice(skills)

    # ID назначенного сотрудника (от 1 до 10)
    assigned_employee = random.randint(1, 10)

    data.append([from_station, to_station, datetime_request, skill, assigned_employee])

# Создание DataFrame
df = pd.DataFrame(data, columns=["from_station", "to_station", "datetime", "skills", "assigned_employee"])

# Извлечение дополнительных столбцов: час и день недели
df["hour"] = df["datetime"].dt.hour
df["day_of_week"] = df["datetime"].dt.weekday

# Сохранение в CSV файл
df.to_csv("historical_requests.csv", index=False)

print("CSV файл успешно создан.")
