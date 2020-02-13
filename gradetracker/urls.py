from django.contrib import admin
from django.urls import include, path
from . import views
import personaldashboard

app_name = 'gradetracker'
urlpatterns = [
    path('home', personaldashboard.views.HomeView.as_view(), name="home"),
    path('', views.IndexView.as_view(), name='index'),
]