#/Users/egorgladkih/PycharmProjects/LCT39/requirements.txt
import pandas as pd
import joblib
import os
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import LabelEncoder

# Загрузка данных
data_path = os.path.join(os.path.dirname(__file__), 'historical_requests.csv')
df = pd.read_csv(data_path)

# Кодировщики для станций и навыков
label_encoder_from_station = LabelEncoder()
label_encoder_to_station = LabelEncoder()
label_encoder_skills = LabelEncoder()

df['from_station'] = label_encoder_from_station.fit_transform(df['from_station'])
df['to_station'] = label_encoder_to_station.fit_transform(df['to_station'])
df['skills'] = label_encoder_skills.fit_transform(df['skills'])

# Обучение модели
X = df[['from_station', 'to_station', 'hour', 'day_of_week', 'skills']]
y = df['assigned_employee']

model = RandomForestClassifier()
model.fit(X, y)

# Сохранение модели и кодировщиков
model_path = os.path.join(os.path.dirname(__file__), '/Users/egorgladkih/PycharmProjects/LCT39/ml_model.pkl')
joblib.dump(model, model_path)

label_encoder_from_station_path = os.path.join(os.path.dirname(__file__), '/Users/egorgladkih/PycharmProjects/LCT39/label_encoder_from_station.pkl')
label_encoder_to_station_path = os.path.join(os.path.dirname(__file__), '/Users/egorgladkih/PycharmProjects/LCT39/label_encoder_to_station.pkl')
label_encoder_skills_path = os.path.join(os.path.dirname(__file__), '/Users/egorgladkih/PycharmProjects/LCT39/label_encoder_skills.pkl')

joblib.dump(label_encoder_from_station, label_encoder_from_station_path)
joblib.dump(label_encoder_to_station, label_encoder_to_station_path)
joblib.dump(label_encoder_skills, label_encoder_skills_path)

print("Модель и кодировщики успешно сохранены.")
