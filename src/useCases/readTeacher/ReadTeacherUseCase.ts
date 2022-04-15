import { IReadTeacherDTO } from './ReadTeacherDTO';
import { ITeacherRepository } from './../../repositories/ITeacherRepository';
import { Teacher } from '../../entities/Teacher';

class ReadTeacherUseCase {

    constructor(private teacherRepository: ITeacherRepository) {};

    async execute(data?: IReadTeacherDTO){

        if (data) {

            if (!data.cpf && !data.id) {
                throw new Error('You must inform the cpf or the id');
            };

            if (data.cpf && data.id) {
                throw new Error('You must inform only the cpf or the id');
            };

            let teacher: Teacher;

            if (data.cpf) {
                teacher = await this.teacherRepository.findByCpf(data.cpf);
            } else if (data.id) {
                teacher = await this.teacherRepository.findById(data.id);
            };

            if(!teacher) {
                throw new Error('Teacher not found');
            };

            return teacher;

        } else {

            const teachers = await this.teacherRepository.findAll();

            return teachers;

        };
  
    };

};

export { ReadTeacherUseCase };