import datetime
from rest_framework import serializers

class CommitSerializer(serializers.Serializer):
    sha = serializers.SerializerMethodField()
    author = serializers.CharField(max_length=256)
    message = serializers.CharField(max_length=256)
    authored_date =serializers.SerializerMethodField()
    branch = serializers.SerializerMethodField()
    author_email = serializers.SerializerMethodField()
    summary = serializers.SerializerMethodField()

    def get_sha(self, obj):
        return str(obj.hexsha)

    def get_branch(self, obj):
        return str(obj.repo.active_branch)

    def get_author_email(self, obj):
        return str(obj.author.email)

    def get_authored_date(self, obj):
        return datetime.datetime.fromtimestamp(obj.authored_date)

    def get_summary(self, obj):
        return dict(obj.stats.total)

class BranchSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=256)
    commit = serializers.CharField(max_length=256)

class RepoSerializer(serializers.Serializer):
    url = serializers.SerializerMethodField()
    description = serializers.CharField(max_length=256)
    active_branch = serializers.CharField(max_length=256)
    commits = CommitSerializer(many=True)
    branches = BranchSerializer(many=True)

    def get_url(self, obj):
        return obj.get('url').rsplit('/', 1)[-1]


class PullRequestSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    author = serializers.CharField(max_length=256)
    title = serializers.CharField(max_length=256)
    description = serializers.CharField(max_length=256)
    base_branch = serializers.CharField(max_length=256)
    compare_branch = serializers.CharField(max_length=256)
    status = serializers.CharField(max_length=1)