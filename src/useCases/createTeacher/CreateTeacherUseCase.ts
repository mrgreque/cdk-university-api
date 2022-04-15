import { ICourseRepository } from './../../repositories/ICourseRepository';
import { PrismaCourseRepository } from './../../repositories/implementations/PrismaCourseRepository';
import { ICreateTeacherDTO } from './CreateTeacherDTO';
import { hash } from 'bcryptjs';
import { Teacher } from '../../entities/Teacher';
import { ITeacherRepository } from "../../repositories/ITeacherRepository";

class CreateTeacherUseCase {

    constructor(private teacherRepository: ITeacherRepository, private courseRepository: ICourseRepository) { };

    async execute(data: ICreateTeacherDTO): Promise<void> {
        
        const teacherExists = await this.teacherRepository.findByCpf(data.cpf);

        if(teacherExists) {
            throw new Error('Teacher already exists');
        };

        const emailExists = await this.teacherRepository.findByEmail(data.email);

        if(emailExists) {
            throw new Error('Email already exists');
        };

        const validCourse = await this.courseRepository.findById(data.courseId);

        if (!validCourse) {
            throw new Error('Course does not exists!');
        };

        const teacher = new Teacher(data);

        const passwordHash = await hash(data.password, 10);
        teacher.password = passwordHash;

        await this.teacherRepository.save(teacher);
        
    };

};

export { CreateTeacherUseCase };