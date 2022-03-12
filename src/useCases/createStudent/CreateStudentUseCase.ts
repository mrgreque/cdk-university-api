import { IStudentRepository } from '../../repositories/IStudentRepository';
import { Student } from '../../entities/Student';
import { ICreateUserDTO } from './CreateStudentDTO';
import { hash } from 'bcryptjs';


class CreateStudentUserCase {

    constructor(private studentRepository: IStudentRepository){};

    async execute(data :ICreateUserDTO) {
        const userAlreadyExists = await this.studentRepository.findByCpf(data.cpf);
        
        if (userAlreadyExists) {
            throw new Error('User already exists!');
        };

        const user = new Student(data);

        const passwordHash = await hash(user.password, 8);
        user.password = passwordHash;

        await this.studentRepository.save(user);

    }   

}

export { CreateStudentUserCase }