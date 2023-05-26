from django.http import HttpResponse
from django.shortcuts import render

def Homepage(request):
    return render (request, 'homepage.html')
def About(request):
    return render(request, 'about.html')