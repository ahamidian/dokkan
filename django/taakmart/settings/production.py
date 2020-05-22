from .base import *

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': os.environ.get('POSTGRES_DB', "dokkan"),
        'USER': os.environ.get('POSTGRES_USER', "amirhossein"),
        'PASSWORD': os.environ.get('POSTGRES_PASSWORD', ""),
        'HOST': os.environ.get("POSTGRES_HOST", ""),
        'PORT': "5432"
    }
}