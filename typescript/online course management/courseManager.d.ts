import { CourseCategory } from "./courseCategory";
export declare class CourseManager {
    private instructors;
    private students;
    private courses;
    addInstructor(name: string, categories: CourseCategory[]): {
        id: number;
        name: string;
        categories: CourseCategory[];
    };
    addStudent(name: string): {
        id: number;
        name: string;
    };
    createCourse(title: string, category: CourseCategory, instructorId: number): {
        id: number;
        title: string;
        category: CourseCategory;
        instructorId: number;
    };
    enrollStudent(courseId: number, studentId: number): void;
    printSummary(): void;
    getAllCourses(): any[];
    getCourseDetails(courseId: number): any;
}
//# sourceMappingURL=courseManager.d.ts.map