from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/repo/', include('flat.urls.repo_urls')),
    path('api/commits/', include('flat.urls.commit_urls')),
    path('api/pull_requests/', include('flat.urls.pull_request_urls')),
]
