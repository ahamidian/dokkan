FROM python:3.7-alpine
MAINTAINER Amirhossein
ENV PYTHONUNBUFFERED 1
WORKDIR /django
COPY requirements.txt ./
RUN pip3 install --no-cache-dir -r requirements.txt
EXPOSE 8000
CMD exec gunicorn taakmart.wsgi:application --bind 0.0.0.0:8000 --workers 3