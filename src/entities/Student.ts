import { uuid } from "uuidv4";

class Student {
    public readonly id:string;
    public cpf: string;
    public firstName: string;
    public lastName: string;
    public password: string;
    public email: string;

    constructor(props: Omit<Student, 'id'>, id?:string) {
        Object.assign(this, props);

        if(!id) {
            this.id = uuid();
        };

    };
};

export { Student };