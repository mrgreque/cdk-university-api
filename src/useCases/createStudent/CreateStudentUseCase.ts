import { ICourseRepository } from './../../repositories/ICourseRepository';
import { PrismaCourseRepository } from './../../repositories/implementations/PrismaCourseRepository';
import { IStudentRepository } from '../../repositories/IStudentRepository';
import { Student } from '../../entities/Student';
import { ICreateStudentDTO } from './CreateStudentDTO';
import { hash } from 'bcryptjs';


class CreateStudentUserCase {

    constructor(private studentRepository: IStudentRepository, private courseRepository: ICourseRepository){};

    async execute(data :ICreateStudentDTO) {
        const userAlreadyExists = await this.studentRepository.findByCpf(data.cpf);
        
        if (userAlreadyExists) {
            throw new Error('Student already exists!');
        };

        const validCourse = await this.courseRepository.findById(data.courseId);

        if (!validCourse) {
            throw new Error('Course does not exists!');
        };

        const user = new Student(data);

        const passwordHash = await hash(user.password, 8);
        user.password = passwordHash;

        await this.studentRepository.save(user);

    }   

}

export { CreateStudentUserCase }