FROM python:3.9-slim

WORKDIR /app

COPY requirements.txt requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Скопируйте всю директорию приложения, включая файл модели
COPY . .

# Убедитесь, что файл модели присутствует в нужной директории
COPY ml_model.pkl /Users/egorgladkih/PycharmProjects/LCT39/ml_model.pkl
COPY label_encoder_from_station.pkl /Users/egorgladkih/PycharmProjects/LCT39/label_encoder_from_station.pkl
COPY label_encoder_skills.pkl /Users/egorgladkih/PycharmProjects/LCT39/label_encoder_skills.pkl
COPY label_encoder_to_station.pkl /Users/egorgladkih/PycharmProjects/LCT39/label_encoder_to_station.pkl
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]