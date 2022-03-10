FROM python:3.8

WORKDIR /CODE

RUN pip install --upgrade pip
ADD ./requirements.txt /CODE/requirements.txt
RUN pip install -r requirements.txt

COPY . /CODE/

expose 8000