from django.contrib import admin
from .models import UserAccount
# Register your models here.

class UserAccountAdmin(admin.ModelAdmin):
    list_display = ('id', 'email', 'name')
    list_display_links = ('id', 'email')
    list_filter = ('email', )
    list_per_page = 25

admin.site.register(UserAccount, UserAccountAdmin)