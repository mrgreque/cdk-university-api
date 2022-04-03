import { client } from '../../entities/Client';
import { Student } from '../../entities/Student';
import { IStudentRepository } from '../IStudentRepository';


export class PrismaStudentsRepository implements IStudentRepository {

    async findByCpf(cpf: string): Promise<Student> {
        const student: Student = await client.student.findUnique({
            where: {
                cpf
            }
        });

        return student;
    };

    async findById(id: string): Promise<Student> {
        const student: Student = await client.student.findUnique({
            where: {
                id
            }
        });

        return student;
    }

    async save(student: Student): Promise<void> {
        await client.student.create({
            data: student
        });
    };

    async alter(student: Student): Promise<void> {
        await client.student.update({
            where: {
                id: student.id
            },
            data: student
        });
    };

    async drop(student: Student): Promise<void> {
        await client.student.delete({
            where: {
                id: student.id
            }           
        });
    };

    async findAll(): Promise<Student[]> {
        const students: Student[] = await client.student.findMany();

        return students;
    };

}