import { ReadStudentDTO } from './ReadStudentDTO';
import { PrismaStudentsRepository } from "../../repositories/implementations/PrismaStudentsRepository";

class ReadStudentUseCase {
    constructor(private studentRepository: PrismaStudentsRepository) {}

    async execute(data?: ReadStudentDTO) {
        if (data) {

            if (!data.cpf) {
                throw new Error('Cpf is required!');
            };

            const student = await this.studentRepository.findByCpf(data.cpf);
            return student;
        } else {
            const students = await this.studentRepository.findAll();
            return students;
        };
    };
};

export { ReadStudentUseCase };