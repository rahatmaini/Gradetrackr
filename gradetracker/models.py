from django.db import models


# Create your models here.
class Student(models.Model):
    pass


class Course(models.Model):
    # isLookingForGroupForThisClass = models.BooleanField(default=False)
    isFinishedCourseOrNot = models.BooleanField(default=False)  # do we track this course or is this a legacy course?
    isVerifiedClassOrNot = models.BooleanField(default=False)  # is this an official Lou's List class we have found?
    isIncludedInGPAOrNot = models.BooleanField(
        default=True)  # is this class used in GPA calculation or is it just a fork of a class someone uses purely for "what if" tracking purposes?

    professorEmail = models.EmailField(null=True)  # if verified class, then we should be able to get this info
    avgFromVAgrades = models.DecimalField(max_digits=4, decimal_places=3,
                                          null=True)  # if verified we should be able to scrape grade from VAgrades.com

    name = models.CharField(max_length=100)  # either searchable name from Lou's List or enter your own, <100 characters
    numOfCredits = models.DecimalField(max_digits=2, decimal_places=1)  # because now they have half credit courses or something?

    targetGrade = models.DecimalField(max_digits=5, decimal_places=2, null=True)  # for assholes who want a target grade of a 100.00%

    studentItBelongsTo = models.ForeignKey(Student, on_delete=models.CASCADE, related_name="courses")


class GradeCategory(models.Model):
    
    name = models.CharField(max_length=100)
    weightage = models.DecimalField(max_digits=4, decimal_places=2)  # wont work for grade categories that are worth 100% of the class. Hopefully this is never an issue

    courseItBelongsTo = models.ForeignKey(Course, on_delete=models.CASCADE, related_name="categories")

class SingularGradeItem(models.Model):
    gradePercentage = models.DecimalField(max_digits=5, decimal_places=2)
    datetimeWhenInputted = models.DateTimeField(auto_now=False, auto_now_add=True)
    didGradeGoUp = models.BooleanField(null=True) #true means it went up compared to last stored value

    whichStudentsSemesterGPAisThis = models.ForeignKey(Student, on_delete=models.CASCADE, related_name="semGPA", null=True)
    whichStudentsCumulativeGPAisThis = models.ForeignKey(Student, on_delete=models.CASCADE, related_name="cumGPA", null=True)

    whichCoursesAvgGradeIsThis = models.ForeignKey(Course, on_delete=models.CASCADE, related_name="courseAvgGrade", null=True)
    whichGradeCategorysAvgGradeIsThis = models.ForeignKey(GradeCategory, on_delete=models.CASCADE, related_name="gradeCategory", null=True)


class Assignment(models.Model):  # abstract name, could be exam or quiz or anything that is worth something
    gradePercentage = models.DecimalField(max_digits=5, decimal_places=2, null=True)
    notifyStudentOrNot = models.BooleanField(default=False)  # maybe a few days in advance of due date, email student
    name = models.CharField(max_length=100)
    dueDate = models.DateTimeField(auto_now=False, auto_now_add=False, null=True)  # default none

    gradeCategoryItBelongsTo = models.ForeignKey(GradeCategory, on_delete=models.CASCADE, related_name="assignments")

