FROM python:3.8

WORKDIR /CODE

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN pip install --upgrade pip
COPY requirements.txt /CODE/
RUN pip install -r requirements.txt
COPY . /CODE/