from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse
from django.views import generic
from django.shortcuts import render, redirect
from django.views.generic import TemplateView
# new stuff
from .models import Course, CourseForm, Student, GradeCategory, Assignment
from django.contrib.auth.models import User


# in gradetracker directory
# Create your views here.

class TestView(TemplateView):
    template_name = 'gradetracker/test.html'


def add(request):
    if request.method == 'POST':
        try:
            finishedCourse = request.POST.get('enrolled')
            if finishedCourse == "False":
                finishedCourse = "True"
            else:
                finishedCourse = "False"
            verifiedClass = request.POST.get('verified')
            includeInGPA = request.POST.get('included')
            professorEmail = request.POST.get('email')
            VAGradeAvg = request.POST.get('VAavg')
            courseTitle = request.POST.get('courseTitle')
            numCredits = request.POST.get('credits')
            targetGrade = request.POST.get('goal')
            current_student = request.user.student
            new_course = Course()
            new_course.Finished_Course = finishedCourse
            new_course.Verified_Class = verifiedClass
            new_course.Include_In_GPA = includeInGPA
            new_course.Professor_Email = professorEmail
            new_course.Average_From_VAgrades = VAGradeAvg
            new_course.name = courseTitle
            new_course.number_Of_Credits = numCredits
            new_course.target_Grade = targetGrade
            new_course.student_It_Belongs_To = current_student
            new_course.save()
        except Exception as e:
            return render(request, 'gradetracker/add.html', {'error_message': "HELLO " + str(e)})
        return HttpResponseRedirect(reverse('gradetracker:dashboard'))
    else:
        return render(request, 'gradetracker/add.html', )


def gradecat(request, course_id=None):
    theCourse = Course.objects.get(id=course_id)
    if request.method == 'POST':
        # courseTitle = request.POST.get('courseTitle')
        gradeCategoryN = request.POST.get('name')
        weight = request.POST.get('weight')
        try:
            new_gradecat = GradeCategory(name=gradeCategoryN, weightage=weight, courseItBelongsTo=theCourse)
            new_gradecat.save()
        except Exception as e:
            return render(request, 'gradetracker/gradecat.html', {'error_message': "HELLO " + str(e), 'course_id' : course_id})
        return redirect('gradetracker:dashboard')
    else:
        return render(request, 'gradetracker/gradecat.html', {'course_id' : course_id})


class IndexView(TemplateView):
    template_name = 'gradetracker/index.html'


def addAssignment(request, course_id=None):
    theCourse = Course.objects.get(id=course_id)
    grade_categories = GradeCategory.objects.all().filter(courseItBelongsTo=theCourse)
    context = {'theCourse' : theCourse,
               'grade_categories' : grade_categories,
               'course_id' : course_id}
    if request.method == 'POST':
        try:
            name = request.POST.get('assignmentName')
            percentage = request.POST.get('weight')
            notification = request.POST.get('notify')
            gradeCatName = request.POST.get('categoryChoice')
            dueDate = request.POST.get('date')
            new_assignment = Assignment()
            new_assignment.name = name
            new_assignment.gradePercentage = percentage
            new_assignment.notifyStudentOrNot = notification
            new_assignment.gradeCategoryItBelongsTo = GradeCategory.objects.get(name=gradeCatName)
            new_assignment.dueDate = dueDate
            new_assignment.save()
        except Exception as e:
            return render(request, 'gradetracker/addAssignment.html', {'theCourse' : theCourse, 'grade_categories' : grade_categories, 'course_id' : course_id, 'error_message' : "BIG ERROR " + str(e)})
        return HttpResponseRedirect(reverse('gradetracker:dashboard'))
    else:
        return render(request, 'gradetracker/addAssignment.html', context)


def CourseDashboard(request):
    # Render the course dashboard of the authenticated user
    if request.user.is_authenticated:
        print(request.user)
        # TODO Get all the courses associated with that user (as a student)
        context = {
            'username': request.user,
            'courses_list': Course.objects.all().filter(student_It_Belongs_To=Student.objects.get(user=request.user))
        }
        return render(request, "gradetracker/dashboard.html", context)
    else:
        return HttpResponseRedirect(reverse("google_login"))


def SignIn(request):
    # Render the course dashboard of the authenticated user
    if request.user.is_authenticated:
        print(request.user)
        # TODO Get all the courses associated with that user (as a student)
        context = {
            'username': request.user,
            'courses_list': Course.objects.all().filter(student_It_Belongs_To=Student.objects.get(user=request.user))
        }
        return render(request, "gradetracker/dashboard.html", context)
    else:
        return redirect('gradetracker:index')  # HttpResponseRedirect(reverse("google_login"))


def delete_course(request, course_id=None):
    course_to_delete = Course.objects.get(id=course_id)
    course_to_delete.delete()

    context = {
        'username': request.user,
        'courses_list': Course.objects.all().filter(student_It_Belongs_To=Student.objects.get(user=request.user))
    }

    return render(request, "gradetracker/dashboard.html", context)


def duplicate_course(request, course_id=None):
    courseToDuplicate = Course.objects.get(id=course_id)
    newCourse = Course(Finished_Course=courseToDuplicate.Finished_Course,
                       Verified_Class=courseToDuplicate.Verified_Class, Include_In_GPA=False,
                       Professor_Email=courseToDuplicate.Professor_Email,
                       Average_From_VAgrades=courseToDuplicate.Average_From_VAgrades, name=courseToDuplicate.name,
                       number_Of_Credits=courseToDuplicate.number_Of_Credits,
                       target_Grade=courseToDuplicate.target_Grade,
                       student_It_Belongs_To=courseToDuplicate.student_It_Belongs_To)
    newCourse.save()

    context = {
        'username': request.user,
        'courses_list': Course.objects.all().filter(student_It_Belongs_To=Student.objects.get(user=request.user))
    }

    return render(request, "gradetracker/dashboard.html", context)


def CourseOverview(request, course_id=None):
    # Render the details of the course that the authenticated user clicks
    if request.user.is_authenticated:
        # Get the course that the user wants to expand
        course_to_display = Course.objects.get(id=course_id)

        # Get all the grade categories associated with that course
        grade_categories = GradeCategory.objects.all().filter(courseItBelongsTo=course_to_display).values()

        # Get all the assignments associated with that grade category

        # dict that will contain all the assignments indexed by the grade category they belong to
        category_assignments = {}


        for category in grade_categories:
            # Add all the assignments belonging to a category to the dictionary at that category's key
            category_assignments[category.get('name')] = Assignment.objects.all().filter(gradeCategoryItBelongsTo=category.get('id'))

        # TODO Get all the courses associated with that user (as a student)
        context = {
            'course': course_to_display,
            'grade_categories': grade_categories,
            'category_assignments': category_assignments
        }
        return render(request, "gradetracker/course.html", context)
    else:
        return HttpResponseRedirect(reverse("google_login"))
