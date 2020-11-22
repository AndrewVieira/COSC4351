FROM ubuntu:20.04
MAINTAINER cs.vance@icloud.com

# install dependencies
RUN apt-get update
RUN apt-get install -y nginx
RUN apt-get install -y build-essential
RUN apt-get install -y python3-dev
RUN apt-get install -y python3-pip
RUN apt-get install -y python3-venv
RUN apt-get install -y python3-setuptools
RUN apt-get install -y nano
RUN apt-get install -y dos2unix

# create application directories
RUN mkdir -p /app/run
RUN chown www-data:www-data -R /app/run

# install python application environment
RUN python3 -m venv /app/venv
COPY requirements.txt /app
RUN . /app/venv/bin/activate && pip install uwsgi
RUN . /app/venv/bin/activate && pip install -r /app/requirements.txt

# copy the application
COPY portal /app/portal

# nginx / uwsgi
COPY docker/uwsgi_params /app/uwsgi_params
COPY docker/nginx_site /etc/nginx/sites-enabled
RUN rm /etc/nginx/sites-enabled/default

# static resources from django
RUN cp -r /app/venv/lib/python3.8/site-packages/django/contrib/admin/static/admin /app/portal/static
RUN cp -r /app/venv/lib/python3.8/site-packages/rest_framework/static/rest_framework /app/portal/static

# entrypoint
COPY docker/entrypoint.sh /app/
RUN chmod 755 /app/entrypoint.sh
RUN dos2unix /app/entrypoint.sh
CMD bash /app/entrypoint.sh

# cleanup
RUN apt-get -qy autoremove
