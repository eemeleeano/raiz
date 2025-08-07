FROM python:3.13

WORKDIR /ui

COPY . .

# Install dependencies.
COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt

EXPOSE 9000

CMD ["python3", "ui.py"]
