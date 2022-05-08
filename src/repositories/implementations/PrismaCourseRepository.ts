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
            },
            include: {
                students: true,
                teachers: true
            }
        });

        return course;
    };

    async findAll(): Promise<Course[]> {
        const courses = await client.course.findMany({
            include: {
                students: true,
                teachers: true
            }
        });

        return courses;
    };

    async update(course: Course): Promise<void> {
        await client.course.update({
            where: {
                id: course.id
            },
            data: course
        });
    }

    async delete(id: string): Promise<void> {
        await client.course.delete({
            where: {
                id
            }
        });
    };

}