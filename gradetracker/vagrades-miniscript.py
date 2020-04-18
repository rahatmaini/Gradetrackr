import requests
import json

URL = "https://vagrades.com/api/uvaclass/"


course_name = ""
r = requests.get(url = URL+course_name) 


data = r.json()

print(data)

# def getCourseInfo(course_name):
#     """
#     Take a course name and return information about it as a python dict
#     """


