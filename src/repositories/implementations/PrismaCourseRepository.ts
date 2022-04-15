import { client } from "../../entities/Client";
import { Course } from "../../entities/Course";
import { ICourseRepository } from "../ICourseRepository";

export class PrismaCourseRepository implements ICourseRepository {

    async save(course: Course): Promise<void> {
        await client.course.create({
            data: course
        });
    };

    async findByName(name: string): Promise<Course> {
        const course = await client.course.findFirst({
            where: {
                name
            }
        });

        return course;
    };

    async findById(id: string): Promise<Course> {
        const course = await client.course.findUnique({
            where: {
                id
            }
        });

        return course;
    };
}