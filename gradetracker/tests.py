from django.test import TestCase
from gradetracker.models import Student, Course, GradeCategory, Assignment
import json


class GradeTrackerTestCase(TestCase):
    def setUp(self):
        #need to settle some primary keys/identifiers before using this, must figure out user/student authentication model first
        pass

    
    def test_set_some_default_grade_averages_to_a_course(self):
        student1 = Student.objects.create(semesterGPA="",cumulativeGPA="")
        class1 = Course.objects.create(name="APMA 3100: Probability", numOfCredits=3, studentItBelongsTo=student1)

        gradesSoFar = [87,90,86]
        serializedGrades = json.dumps(gradesSoFar)
        class1.gradePercentage = serializedGrades

        self.assertEqual([87,90,86],json.loads(class1.gradePercentage))

    def test_add_a_new_grade_avg_to_a_course(self):
        student1 = Student.objects.create(semesterGPA="",cumulativeGPA="")
        class1 = Course.objects.create(name="APMA 3100: Probability", numOfCredits=3, studentItBelongsTo=student1)

        class1.gradePercentage =  json.dumps([87,90,86])
        jsonDecoder=json.decoder.JSONDecoder()
        newGrades=jsonDecoder.decode(class1.gradePercentage)
        newGrades.append(90)
        class1.gradePercentage = json.dumps(newGrades)

        self.assertEqual([87,90,86,90],jsonDecoder.decode(class1.gradePercentage))

    def test_this_course_belongs_to_this_student(self):
        student1 = Student.objects.create(semesterGPA="",cumulativeGPA="")
        class1 = Course.objects.create(name="APMA 3100: Probability", numOfCredits=3, studentItBelongsTo=student1)

        self.assertEqual(class1.studentItBelongsTo,student1)

    def test_this_GradeCategory_belongs_to_this_class(self):
        student1 = Student.objects.create(semesterGPA="",cumulativeGPA="")
        class1 = Course.objects.create(name="APMA 3100: Probability", numOfCredits=3, studentItBelongsTo=student1)
        category1 = GradeCategory.objects.create(name="Exams",weightage=45, courseItBelongsTo=class1)

        self.assertEqual(category1.courseItBelongsTo,class1)

    def test_correct_class_grade_reported(self):
        student1 = Student.objects.create(semesterGPA="",cumulativeGPA="")
        class1 = Course.objects.create(name="APMA 3100: Probability", numOfCredits=3, studentItBelongsTo=student1)
        category1 = GradeCategory.objects.create(name="Exams",weightage=50, courseItBelongsTo=class1)
        category2 = GradeCategory.objects.create(name="Homework",weightage=50, courseItBelongsTo=class1)
        assignment1 = Assignment.objects.create(name="Exam 1", gradePercentage=80,gradeCategoryItBelongsTo=category1)
        assignment2 = Assignment.objects.create(name="Exam 2", gradePercentage=90,gradeCategoryItBelongsTo=category1)
        assignment3 = Assignment.objects.create(name="HW 1", gradePercentage=100,gradeCategoryItBelongsTo=category2)

        #algorithm: get a class, get its categories, in each category get the avg grade, add to a list of tuples [(category weight : category grade),...] then iterate and calculate grade

        gradesAndTheirWeights=[]

        listOfCategoriesInClass = class1.categories.all()
        for category in listOfCategoriesInClass: #this code calculates grade per category
            listOfAssignmentsInCategory = category.assignments.all()
            gradeAvg=0
            for assignment in listOfAssignmentsInCategory:
                gradeAvg+=assignment.gradePercentage
            gradeAvg/=len(listOfAssignmentsInCategory)
            gradesAndTheirWeights.append((float(category.weightage),float(gradeAvg)))
        
        avgClassGrade=0
        for item in gradesAndTheirWeights: #this code calculates grade average
            avgClassGrade+=item[0]*item[1]/100
        
        self.assertEqual(92.5,avgClassGrade)

            




        
