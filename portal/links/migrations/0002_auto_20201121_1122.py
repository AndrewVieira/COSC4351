# Generated by Django 3.1.3 on 2020-11-21 17:22

from django.db import migrations
from django.contrib.auth.hashers import make_password


def init_db(apps, schema_editor):
    User = apps.get_model('auth', 'User')
    Group = apps.get_model('auth', 'Group')
    Link = apps.get_model('links', 'Link')

    # ADMIN
    group_admin = Group.objects.create(name='ADMIN')

    user_admin = User.objects.create(username='admin',
                                     email='admin@portal',
                                     password=make_password('admin'),
                                     is_active=True,
                                     is_staff=True,
                                     is_superuser=True)
    user_admin.groups.add(group_admin)

    Link.objects.create(url='http://localhost:8000/admin',
                        name='Manage Roles',
                        group=group_admin)

    # FINANCE_ADMIN
    group_finance = Group.objects.create(name='FINANCE_ADMIN')

    user_finance = User.objects.create(username='finance',
                                       email='finance@portal',
                                       password=make_password('finance'),
                                       is_active=True)
    user_finance.groups.add(group_finance)

    Link.objects.create(url='https://www.google.com/finance',
                        name='Google Finance',
                        group=group_finance)
    Link.objects.create(url='https://www.chase.com',
                        name='Chase Bank',
                        group=group_finance)

    # SALES_ADMIN
    group_sales = Group.objects.create(name='SALES_ADMIN')

    user_sales = User.objects.create(username='sales',
                                     email='sales@portal',
                                     password=make_password('sales'),
                                     is_active=True)
    user_sales.groups.add(group_sales)

    Link.objects.create(url='https://www.salesforce.com',
                        name='Salesforce',
                        group=group_sales)

    # HR_ADMIN
    group_hr = Group.objects.create(name='HR_ADMIN')

    user_hr = User.objects.create(username='hr',
                                  email='hr@portal',
                                  password=make_password('hr'),
                                  is_active=True)
    user_hr.groups.add(group_hr)

    Link.objects.create(url='https://totalsource.adp.com',
                        name='ADP',
                        group=group_hr)

    # TECH_ADMIN
    group_tech = Group.objects.create(name='TECH_ADMIN')

    user_tech = User.objects.create(username='tech',
                                    email='tech@portal',
                                    password=make_password('tech'),
                                    is_active=True)
    user_tech.groups.add(group_tech)

    Link.objects.create(url='https://www.newegg.com/',
                        name='newegg',
                        group=group_tech)
    Link.objects.create(url='https://docs.djangoproject.com/en/3.1',
                        name='Django 3.1 Documentation',
                        group=group_tech)


class Migration(migrations.Migration):
    dependencies = [
        ('links', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(init_db)
    ]