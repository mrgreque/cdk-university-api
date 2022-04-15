import { client } from '../../entities/Client';
import { Teacher } from '../../entities/Teacher';
import { ITeacherRepository } from './../ITeacherRepository';

export class PrismaTeacherRepository implements ITeacherRepository {

    async findByCpf(cpf: string): Promise<Teacher> {
        const teacher: Teacher = await client.teacher.findUnique({
            where: {
                cpf
            }
        });

        return teacher;
    };

    async findById(id: string): Promise<Teacher> {
        const teacher: Teacher = await client.teacher.findUnique({
            where: {
                id
            }
        });

        return teacher;
    };

    async findAll(): Promise<Teacher[]> {
        const teachers: Teacher[] = await client.teacher.findMany();

        return teachers;
    };

    async findByEmail(email: string): Promise<Teacher> {
        const teacher: Teacher = await client.teacher.findFirst({
            where: {
                email
            }
        });

        return teacher;
    };

    async save(teacher: Teacher): Promise<void> {
        await client.teacher.create({
            data: teacher
        })
    };

    async alter(teacher: Teacher): Promise<void> {
        await client.teacher.update({
            where: {
                id: teacher.id
            },
            data: teacher
        });
    };

    async drop(teacher: Teacher): Promise<void> {
        await client.teacher.delete({
            where: {
                id: teacher.id
            }           
        });
    };

};