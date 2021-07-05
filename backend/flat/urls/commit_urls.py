from django.urls import path
from flat.api import commit_views as views

urlpatterns = [
    path('<str:branch>/<str:sha>/', views.CommitDetail.as_view(), name='commit_detail'),
]