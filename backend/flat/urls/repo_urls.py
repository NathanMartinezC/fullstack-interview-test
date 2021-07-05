from django.urls import path
from flat.api import repo_views as views

urlpatterns = [
    path('', views.RepoDetail.as_view(), name='repo_detail'),
    path('commits/<str:branch>/', views.RepoDetail.as_view(), name='repo_branch'),
    path('branches/', views.BranchesList.as_view(), name='branches'),
]