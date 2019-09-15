from django.db import models
from django.contrib.auth.models import User
# Create your models here.
class Lead(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True,max_length=100)
    message = models.CharField(max_length=500,blank=True)
    owner = models.ForeignKey(User,on_delete=models.CASCADE,null=True,related_name="leads")
    created_at = models.DateTimeField(auto_now_add=True)
    
