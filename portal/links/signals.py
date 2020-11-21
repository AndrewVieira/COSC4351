
from django.contrib.auth.models import User, Group
from django.db.models.signals import m2m_changed
from django.dispatch import receiver


@receiver(signal=m2m_changed, sender=User.groups.through)
def superuser_group_sync(instance, action, reverse, model, pk_set, using, *args, **kwargs):
    if model == Group:
        if action == 'post_add':
            administrators_pk = Group.objects.get(name='ADMIN').pk
            if administrators_pk in pk_set:
                instance.is_superuser = True
                instance.is_staff = True
                instance.save()
        elif action == 'post_remove':
            administrators_pk = Group.objects.get(name='ADMIN').pk
            if administrators_pk in pk_set:
                instance.is_superuser = False
                instance.is_staff = False
                instance.save()
