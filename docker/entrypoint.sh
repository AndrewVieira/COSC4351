#!/bin/bash

# Start HTTP server
/etc/init.d/nginx start

# Trigger migration if needed
source /app/venv/bin/activate
cd /app/portal
python manage.py migrate
chown www-data:www-data -R /app/portal/db

# Start Django
uwsgi --chdir=/app/portal \
    --module=portal.wsgi:application \
    --env DJANGO_SETTINGS_MODULE=portal.settings \
    --master \
    --pidfile=/app/run/uwsgi.pid \
    --socket=/app/run/uwsgi.sock \
    --processes=4 \
    --uid=33 --gid=33 \
    --harakiri=20 \
    --max-requests=5000 \
    --vacuum \
    --home=/app/venv \
    --daemonize /app/run/uwsgi.log
