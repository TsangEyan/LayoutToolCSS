from django.shortcuts import render, HttpResponse


def index(request):
    # return HttpResponse("hahaha")
    return render(request, "tool.html")
