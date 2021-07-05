from django.urls import path
from flat.api import pull_request_views as views

urlpatterns = [
    path('', views.PullRequestList.as_view(), name='pull_request_list'),
]