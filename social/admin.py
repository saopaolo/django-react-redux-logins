from django.contrib import admin
from .models import Posts

# Register your models here.
class PostsAdmin(admin.ModelAdmin):
    list_display = [field.name for field in Posts._meta.get_fields()]
    search_fields = ('UserAccount', 'username')
    list_per_page = 25

admin.site.register(Posts, PostsAdmin)