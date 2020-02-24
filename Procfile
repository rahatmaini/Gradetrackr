web: gunicorn personaldashboard.wsgi --log-level debug
release: python manage.py migrate
web: python manage.py collectstatic --noinput