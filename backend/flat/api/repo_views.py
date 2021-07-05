from django.conf import settings
from git import Repo
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from flat.serializers import RepoSerializer, BranchSerializer

class RepoDetail(APIView):

    def get(self, request, branch):
        data = request.data

        try:
            repo = Repo(settings.LOCAL_REPO_URL)
            branches = repo.branches

            commits = list(repo.iter_commits(branch))
            data = {
                'url': settings.REPO_URL,
                'commits': commits,
                'description': repo.description,
                'active_branch': branch,
                'branches': branches
            }
            serializer = RepoSerializer(data, many=False)
            return Response(serializer.data)
        except:
            message = {'detail': 'Data can not be loaded'}
            return Response(message, status=status.HTTP_400_BAD_REQUEST)

class BranchesList(APIView):

    def get(self, request):

        try:
            repo = Repo(settings.LOCAL_REPO_URL)
            branches = repo.branches
            serializer = BranchSerializer(branches, many=True)
            return Response(serializer.data)
        except:
            message = {'detail': 'Data can not be loaded'}
            return Response(message, status=status.HTTP_400_BAD_REQUEST)
