"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseManager = void 0;
class CourseManager {
    constructor() {
        this.instructors = [];
        this.students = [];
        this.courses = [];
    }
    addInstructor(name, categories) {
        const instructor = { id: this.instructors.length + 1, name, categories };
        this.instructors.push(instructor);
        return instructor;
    }
    addStudent(name) {
        const student = { id: this.students.length + 1, name };
        this.students.push(student);
        return student;
    }
    createCourse(title, category, instructorId) {
        const course = { id: this.courses.length + 1, title, category, instructorId };
        this.courses.push(course);
        return course;
    }
    enrollStudent(courseId, studentId) {
        const course = this.courses.find((c) => c.id === courseId);
        if (!course)
            return;
        if (!course.students)
            course.students = [];
        course.students.push(studentId);
    }
    printSummary() {
        console.log("Courses:", this.courses);
        console.log("Instructors:", this.instructors);
        console.log("Students:", this.students);
    }
    getAllCourses() {
        return this.courses;
    }
    getCourseDetails(courseId) {
        return this.courses.find((c) => c.id === courseId);
    }
}
exports.CourseManager = CourseManager;
