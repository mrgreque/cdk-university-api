import { Student } from "../entities/Student";

export interface IStudentRepository {
    findByCpf( cpf: string ): Promise<Student>;
    save(student: Student): Promise<void>;
    alter(student: Student): Promise<void>;
    drop(student: Student): Promise<void>;
    findAll(): Promise<Student[]>;
}