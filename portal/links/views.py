from .serializers import LinkSerializer
from .models import Link
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.authtoken.views import Token

# Create your views here.
@csrf_exempt
def links(request):
    if request.method == 'GET':

        user = None
        if 'Authorization' in request.headers:
            token = Token.objects.filter(key=request.headers['Authorization'].split(' ')[1])
            if len(token) == 1:
                user = token[0].user
        elif request.user.is_authenticated:
            user = request.user

        if user is None:
            return JsonResponse({'message': 'Not authenticated'}, status=511)

        _links = Link.objects.filter(group_id__in=user.groups.all())
        serializer = LinkSerializer(data=_links, many=True)

        # For some reason serializer.is_valid() is always False even if its true, but we must call it before returning
        serializer.is_valid()

        return JsonResponse(serializer.data, safe=False)

    else:
        return JsonResponse({'message': 'Only GET is supported'}, status=501)
