import { ReadStudentDTO } from './ReadStudentDTO';
import { PrismaStudentsRepository } from "../../repositories/implementations/PrismaStudentsRepository";
import { Student } from '../../entities/Student';

class ReadStudentUseCase {
    constructor(private studentRepository: PrismaStudentsRepository) {}

    async execute(data?: ReadStudentDTO) {
        if (data) {

            if (!data.cpf && !data.id) {
                throw new Error('Cpf or id is required!');
            };

            if (data.cpf && data.id) {
                throw new Error('Select only one option!');
            };

            let student: Student;

            if (data.cpf) {
                student = await this.studentRepository.findByCpf(data.cpf);
            } else if (data.id) {
                student = await this.studentRepository.findById(data.id);
            };

            if (!student) {
                throw new Error('Student not found!');
            };

            return student;
            
        } else {
            const students = await this.studentRepository.findAll();
            return students;
        };
    };
};

export { ReadStudentUseCase };