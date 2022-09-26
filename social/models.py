from django.db import models
from accounts.models import UserAccount

# Create your models here.
# Post
class Posts(models.Model):
    
    userAccount = models.ForeignKey(UserAccount, on_delete=models.CASCADE)
    profilePic = models.ImageField(blank=True)
    image = models.ImageField(upload_to='posts-photos/%Y/%m/%d/', blank=True)
    video = models.FileField(upload_to='posts-videos/%Y/%m/%d/', blank=True)
    username = models.CharField(max_length=200)
    timestamp = models.DateTimeField(blank=True, auto_now_add=True)
    message = models.TextField(blank=True)
    like = models.IntegerField(blank=True)
    
    def __str__(self):
        return self.username
