class StudentTeam {

    public studentId: string;
    public teamId: string;

    constructor(props: { studentId: string, teamId: string }) {
        Object.assign(this, props);
    };

};

export { StudentTeam };