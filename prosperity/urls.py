from django.conf import settings
from django.conf.urls.static import static
from django.urls import path, include, re_path
from django.views.generic import TemplateView
from django.contrib import admin

urlpatterns = [
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),
    path('admin/', admin.site.urls),
    path('api/application-form/', include('application_form.urls')),
    path('api/social/', include('social.urls')),
    path('api/contacts/', include('contacts.urls')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

#RED
urlpatterns +=[re_path(r'^.*', TemplateView.as_view(template_name='index.html'))]
