from .serializers import LinkSerializer
from .models import Link
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt


# Create your views here.
@csrf_exempt
def links(request):
    if request.method == 'GET':
        if not request.user.is_authenticated:
            return JsonResponse({'message': 'Not authenticated'}, status=511)

        _links = Link.objects.filter(group_id__in=request.user.groups.all())
        serializer = LinkSerializer(data=_links, many=True)

        # For some reason serializer.is_valid() is always False even if its true, but we must call it before returning
        serializer.is_valid()

        return JsonResponse(serializer.data, safe=False)

    else:
        return JsonResponse({'message': 'Only GET is supported'}, status=501)
