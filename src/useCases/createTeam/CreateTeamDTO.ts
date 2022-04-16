interface IStudent {
    studentId: string;
}

export interface ICreateTeamDTO {
    name: string;
    description: string;
    teacherId: string;
    students: IStudent[];
};