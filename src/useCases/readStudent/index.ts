import { PrismaStudentsRepository } from "../../repositories/implementations/PrismaStudentsRepository";
import { ReadStudentController } from "./ReadStudentController";
import { ReadStudentUseCase } from "./ReadStudentUseCase";

const prismaRepository = new PrismaStudentsRepository();

const readStudentUseCase = new ReadStudentUseCase(prismaRepository);
const readStudentController = new ReadStudentController(readStudentUseCase);

export { readStudentUseCase, readStudentController };