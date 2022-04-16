import { uuid } from 'uuidv4';
class Team {

    public readonly id: string;
    public name: string;
    public description: string;
    public teacherId: string;

    constructor(props: Omit<Team, 'id'>, id?: string) {
        Object.assign(this, props);

        if (!id) {
            this.id = uuid();
        };
    };

};

export { Team };