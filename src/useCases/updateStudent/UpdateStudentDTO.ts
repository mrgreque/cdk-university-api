export interface IUpdateStudentDTO {
    id: string;
    cpf: string;
    firstName?: string;
    lastName?: string;
    password?: string;
    email?: string;
    courseId?: string;
}