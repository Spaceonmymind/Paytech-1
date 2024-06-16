import pandas as pd
import joblib
import os

# Загрузка обученной модели и кодировщиков
model_path = os.path.join(os.path.dirname(__file__), '/Users/egorgladkih/PycharmProjects/LCT39/ml_model.pkl')
label_encoder_from_station_path = os.path.join(os.path.dirname(__file__), '/Users/egorgladkih/PycharmProjects/LCT39/label_encoder_from_station.pkl')
label_encoder_to_station_path = os.path.join(os.path.dirname(__file__), '/Users/egorgladkih/PycharmProjects/LCT39/label_encoder_to_station.pkl')
label_encoder_skills_path = os.path.join(os.path.dirname(__file__), '/Users/egorgladkih/PycharmProjects/LCT39/label_encoder_skills.pkl')

model = joblib.load(model_path)
label_encoder_from_station = joblib.load(label_encoder_from_station_path)
label_encoder_to_station = joblib.load(label_encoder_to_station_path)
label_encoder_skills = joblib.load(label_encoder_skills_path)


def predict_best_employee(request, employees):
    # Подготовка данных для предсказания
    data = pd.DataFrame({
        'from_station': [request['from_station']],
        'to_station': [request['to_station']],
        'hour': [request['datetime'].hour],
        'day_of_week': [request['datetime'].weekday()],
        'skills': [label_encoder_skills.transform([employee['skills'] for employee in employees])]
    })

    # Преобразование станций
    data['from_station'] = label_encoder_from_station.transform(data['from_station'])
    data['to_station'] = label_encoder_to_station.transform(data['to_station'])

    # Предсказание лучшего сотрудника
    predictions = model.predict(data)

    best_employee_id = predictions[0]
    for employee in employees:
        if employee['id'] == best_employee_id:
            return employee
    return None
    employee = model.predict([request])
    return employee

