from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse
from django.views import generic
from django.shortcuts import render
from django.views.generic import TemplateView


# in gradetracker directory
# Create your views here.

class AddView(TemplateView):
    template_name = 'gradetracker/add.html'

class IndexView(TemplateView):
    template_name = 'gradetracker/index.html'
