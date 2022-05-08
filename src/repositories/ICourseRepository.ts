import { Course } from "../entities/Course";

export interface ICourseRepository {
    save(course: Course): Promise<void>;
    findByName(name: string): Promise<Course>;
    findById(id: string): Promise<Course>;
    findAll(): Promise<Course[]>;
    update(course: Course): Promise<void>;
    delete(id: string): Promise<void>;
};