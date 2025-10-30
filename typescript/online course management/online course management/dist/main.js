"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const courseManager_js_1 = require("./courseManager.js");
const courseCategory_js_1 = require("./courseCategory.js");
// Create an instance of CourseManager
const courseManager = new courseManager_js_1.CourseManager();
// Example usage
const instructor1 = courseManager.addInstructor("John Doe", [courseCategory_js_1.CourseCategory.DEVELOPMENT]);
const student1 = courseManager.addStudent("Alice Smith");
const course1 = courseManager.createCourse("TypeScript Basics", courseCategory_js_1.CourseCategory.DEVELOPMENT, instructor1.id);
courseManager.enrollStudent(course1.id, student1.id);
// Print summary
courseManager.printSummary();
// Fetch and display all courses
const allCourses = courseManager.getAllCourses();
console.log("All Courses:", allCourses);
// Fetch and display course details 
const courseDetails = courseManager.getCourseDetails(course1.id);
console.log("Course Details:", courseDetails);
// The above code demonstrates the creation of instructors, students, and courses,
// as well as enrolling students in courses using the CourseManager class.
// It also showcases the use of decorators for logging actions within the system.
//iterators and generators can be implemented in various parts of the system as needed,
// such as iterating over student enrollments or course lists, depending on further requirements.
// StudentManager class can be implemented similarly to CourseManager
// with methods to manage student-specific actions and data.
// Decorator function to log method calls and their arguments
function LogAction(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`Action: ${propertyKey} called with arguments: ${JSON.stringify(args)}`);
        return originalMethod.apply(this, args);
    };
    return descriptor;
}
// The LogAction decorator can be applied to methods in other classes
