from django.conf import settings
from git import Repo
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from flat.models import PullRequest
from flat.serializers import PullRequestSerializer

class PullRequestList(APIView):

    def get(self, request):
        
        try:
            pull_requests = PullRequest.objects.all()
            serializer = PullRequestSerializer(pull_requests, many=True)
            return Response(serializer.data)
        except:
            message = {'detail': 'Data can not be loaded'}
            return Response(message, status=status.HTTP_400_BAD_REQUEST)

    
    def post(self, request):
        data = request.data
        pull_request = PullRequest.objects.create(
            author=data['author'],
            title=data['title'],
            description=data['description'],
            status=data['status']
        )
        serializer = PullRequestSerializer(pull_request, many=False)
        return Response(serializer.data)

