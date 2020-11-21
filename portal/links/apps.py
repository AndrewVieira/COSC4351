from django.apps import AppConfig


class LinksConfig(AppConfig):
    name = 'links'

    def ready(self):
        from .signals import superuser_group_sync
