FROM python:3.7-alpine
MAINTAINER Amirhossein
ENV PYTHONUNBUFFERED 1
WORKDIR /taakmart
COPY requirements.txt ./
RUN pip3 install --no-cache-dir -r requirements.txt
EXPOSE 8000
