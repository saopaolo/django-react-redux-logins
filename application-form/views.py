from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import permissions
from rest_framework.decorators import api_view, permission_classes
from .models import ApplicationForm
from .serializers import ApplicationFormSerializer

# Create your views here.
@api_view(['GET'])
@permission_classes((permissions.AllowAny, ))
def appFormList (request):
    applications = ApplicationForm.objects.all()
    serializer = ApplicationFormSerializer(applications, many=True)
    return Response(serializer.data)

#Detail view
@api_view(['GET'])
@permission_classes((permissions.AllowAny, ))
def appFormDetail (request, pk):
    applications = ApplicationForm.objects.get(id=pk)
    serializer = ApplicationFormSerializer(applications, many=False)
    return Response(serializer.data)

@api_view(['POST'])
@permission_classes((permissions.AllowAny, ))
def appFormCreate (request):
    serializer = ApplicationFormSerializer(data=request.data)
    
    if serializer.is_valid():
        serializer.save()
    
    return Response(serializer.data)

@api_view(['POST'])
@permission_classes((permissions.AllowAny, ))
def appFormUpdate (request, pk):
    application = ApplicationForm.objects.get(id=pk)
    serializer = ApplicationFormSerializer(instance=application ,data=request.data)
    
    if serializer.is_valid():
        serializer.save()
    
    return Response(serializer.data)

@api_view(['DELETE'])
@permission_classes((permissions.AllowAny, ))
def appFormDelete (request, pk):
    application = ApplicationForm.objects.get(id=pk)
    application.delete()
    
    
    return Response('Item Successfully Deleted')