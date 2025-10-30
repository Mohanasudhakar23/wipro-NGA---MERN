<<<<<<< HEAD
import { CourseCategory } from "./courseCategory";

export class CourseManager {
  private instructors: any[] = [];
  private students: any[] = [];
  private courses: any[] = [];

  addInstructor(name: string, categories: CourseCategory[]) {
    const instructor = { id: this.instructors.length + 1, name, categories };
    this.instructors.push(instructor);
    return instructor;
  }

  addStudent(name: string) {
    const student = { id: this.students.length + 1, name };
    this.students.push(student);
    return student;
  }

  createCourse(title: string, category: CourseCategory, instructorId: number) {
    const course = { id: this.courses.length + 1, title, category, instructorId };
    this.courses.push(course);
    return course;
  }

  enrollStudent(courseId: number, studentId: number) {
    const course = this.courses.find((c) => c.id === courseId);
    if (!course) return;
    if (!course.students) course.students = [];
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

  getCourseDetails(courseId: number) {
    return this.courses.find((c) => c.id === courseId);
  }
}
=======
import { CourseCategory } from "./courseCategory";

export class CourseManager {
  private instructors: any[] = [];
  private students: any[] = [];
  private courses: any[] = [];

  addInstructor(name: string, categories: CourseCategory[]) {
    const instructor = { id: this.instructors.length + 1, name, categories };
    this.instructors.push(instructor);
    return instructor;
  }

  addStudent(name: string) {
    const student = { id: this.students.length + 1, name };
    this.students.push(student);
    return student;
  }

  createCourse(title: string, category: CourseCategory, instructorId: number) {
    const course = { id: this.courses.length + 1, title, category, instructorId };
    this.courses.push(course);
    return course;
  }

  enrollStudent(courseId: number, studentId: number) {
    const course = this.courses.find((c) => c.id === courseId);
    if (!course) return;
    if (!course.students) course.students = [];
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

  getCourseDetails(courseId: number) {
    return this.courses.find((c) => c.id === courseId);
  }
}
>>>>>>> 080a9999e95ce653b6fae939698863a37ff853fd
