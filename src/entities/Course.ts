import { uuid } from 'uuidv4';

class Course {

    public readonly id: string;
    public name: string;
    public description: string;

    constructor(props: Omit<Course, 'id'>, id?: string) {
        Object.assign(this, props);

        if (!id) {
            this.id = uuid();
        };

    };

};

export { Course };