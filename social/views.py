from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import PostsSerializer
from datetime import datetime, timezone

# Create your views here.
# Posts
class PostsView(APIView):
    serializer_class = PostsSerializer