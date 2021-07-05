import os
from django.conf import settings
from git import Repo

REPO_URL = 'https://github.com/NathanMartinezC/fullstack-interview-test.git'

if not os.path.exists(os.path.join(settings.BASE_DIR, 'repo')):
    Repo.clone_from(REPO_URL, 'repo', branch='master', mirror=True)

LOCAL_REPO_URL = os.path.join(settings.BASE_DIR, 'repo')

