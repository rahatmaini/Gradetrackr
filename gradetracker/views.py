from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse
from django.views import generic
from django.shortcuts import render
from django.views.generic import TemplateView
#new stuff
from .models import Course, CourseForm
#new stuff

# in gradetracker directory
# Create your views here.

#class AddView(TemplateView):
#    template_name = 'gradetracker/add.html'



class IndexView(TemplateView):
    template_name = 'gradetracker/index.html'
    #if user is logged in, create a new student object with user context variable

def CreateCourse(request):
    form = CourseForm(request.POST or None)
    if form.is_valid():
        form.save()
    context = {
        'form' : form
    }
    return render(request, "gradetracker/add.html", context)
