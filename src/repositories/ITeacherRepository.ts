import { Teacher } from "../entities/Teacher";

export interface ITeacherRepository {
    findByCpf(cpf: string): Promise<Teacher>;
    findById(id: string): Promise<Teacher>;
    findAll(): Promise<Teacher[]>;
    findByEmail(email: string): Promise<Teacher>;
    save(teacher: Teacher): Promise<void>;
    alter(teacher: Teacher): Promise<void>;
    drop(teacher: Teacher): Promise<void>;
}