import { Course } from "../entities/Course";

export interface ICourseRepository {
    save(course: Course): Promise<void>;
    findByName(name: string): Promise<Course>;
    findById(id: string): Promise<Course>;
};