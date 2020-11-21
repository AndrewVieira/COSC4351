from django.db import models
from django.contrib.auth.models import Group


# Create your models here.
class Link(models.Model):
    url = models.CharField(max_length=512)
    name = models.CharField(max_length=64, null=True)
    group = models.ForeignKey(Group, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.url


def init_db():
    group_admin = Group(name='ADMIN')
    group_admin.save()

    Link(url='http://localhost:8000/admin', group=group_admin).save()

    group_finance = Group(name='FINANCE_ADMIN')
    group_finance.save()

    Link(url='https://www.google.com/finance', name='Google Finance', group=group_finance).save()
    Link(url='https://www.chase.com', name='Chase Bank', group=group_finance).save()

    group_sales = Group(name='SALES_ADMIN')
    group_sales.save()

    Link(url='https://www.salesforce.com/', name='Salesforce', group=group_sales).save()

    group_hr = Group(name='HR_ADMIN')
    group_hr.save()

    Link(url='https://totalsource.adp.com/', name='ADP', group=group_hr).save()

    group_tech = Group(name='TECH_ADMIN')
    group_tech.save()

    Link(url='https://www.newegg.com/', name='newegg', group=group_tech).save()


