import requests
import json

URL = "https://vagrades.com/api/uvaclass/"


course_name = "CS3240"
r = requests.get(url = URL+course_name) 


data = r.json()

print(data['course'])

# def getCourseInfo(course_name):
#     """
#     Take a course name and return information about it as a python dict
#     """


