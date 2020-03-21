from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse
from django.views import generic
from django.shortcuts import render
from django.views.generic import TemplateView
#new stuff
from .models import Course, CourseForm, Student
#new stuff

# in gradetracker directory
# Create your views here.

#class AddView(TemplateView):
#    template_name = 'gradetracker/add.html'

# def add(request,)

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

def CourseDashboard(request):
    # Render the course dashboard of the authenticated user
    if request.user.is_authenticated:
        print(request.user)
        # TODO Get all the courses associated with that user (as a student)
        context = {
        'username' : request.user,
        'courses_list' : Course.objects.all().filter(student_It_Belongs_To=Student.objects.get(user=request.user))
    }
        return render(request, "gradetracker/dashboard.html", context)
    else:
        return HttpResponseRedirect(reverse("google_login"))