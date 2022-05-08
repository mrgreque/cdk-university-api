export interface ICreateLessionDTO {
    name: string;
    description: string;
    startDate: Date;
    endDate: Date;
    teacherId: string;
    file?: string;
}