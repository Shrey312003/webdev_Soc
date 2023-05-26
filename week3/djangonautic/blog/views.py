from django.shortcuts import render
from .models import Article

def Articles(request):
    articles= Article.objects.all().order_by('date')
    return render(request, 'blog/articles.html',{'articles': articles})
