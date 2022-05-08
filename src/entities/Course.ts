import { uuid } from 'uuidv4';
import { Student } from './Student';
import { Teacher } from './Teacher';

class Course {

    public readonly id: string;
    public name: string;
    public description: string;
    public students?: Student[];
    public teachers?: Teacher[];

    constructor(props: Omit<Course, 'id'>, id?: string) {
        Object.assign(this, props);

        if (!id) {
            this.id = uuid();
        };

    };

};

export { Course };