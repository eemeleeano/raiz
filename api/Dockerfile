FROM python:3.13

WORKDIR /api

COPY . .

# Install dependencies.
COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt

EXPOSE 5000

CMD ["python3", "api.py"]
