from rest_framework import serializers
from .models import Link


class LinkSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Link
        fields = ['id', 'url', 'name']
