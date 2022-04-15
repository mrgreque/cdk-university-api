import { uuid } from 'uuidv4';

class Teacher {
    public readonly id:string;
    public cpf: string;
    public firstName: string;
    public lastName: string;
    public password: string;
    public email: string;
    public theme: string;
    public courseId: string;

    constructor(props: Omit<Teacher, 'id'>, id?:string) {
        Object.assign(this, props);

        if(!id) {
            this.id = uuid();
        };

    };
};

export { Teacher };