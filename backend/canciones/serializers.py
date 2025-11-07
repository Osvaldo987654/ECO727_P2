from rest_framework import serializers
from .models import Cancion


#datos de del model Django a un formato que pueda enviarse por la web
class CancionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cancion
        fields = '__all__'
