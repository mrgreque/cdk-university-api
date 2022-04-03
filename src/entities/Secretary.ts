import { uuid } from 'uuidv4';

class Secretary {
    public readonly id: string;
    public cpf: string;
    public firstName: string;
    public lastName: string;
    public password: string;
    public email: string;
    public sector: string;

    constructor(props: Omit<Secretary, 'id'>, id?:string) {
        Object.assign(this, props);

        if(!id) {
            this.id = uuid();
        };

    };
};

export { Secretary };