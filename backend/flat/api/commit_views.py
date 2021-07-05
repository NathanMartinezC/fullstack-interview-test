from django.conf import settings
from git import Repo
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from flat.serializers import CommitSerializer

class CommitDetail(APIView):

    def get(self, request, branch, sha):
        try:
            commit = ''
            repo = Repo(settings.LOCAL_REPO_URL)
            commits = list(repo.iter_commits(branch))
            for item in commits:
                if item.hexsha == sha:
                    commit = item
                    break

            print(commit.message)
            print(branch)
            serializer = CommitSerializer(commit, many=False)
            return Response(serializer.data)
        except:
            message = {'detail': 'Commit does not exist'}
            return Response(message, status=status.HTTP_400_BAD_REQUEST)
