import { ITeamRepository } from './../../repositories/ITeamRepository';
import { IStudentRepository } from '../../repositories/IStudentRepository';
import { ICreateTeamDTO } from './CreateTeamDTO';
import { Team } from '../../entities/Team';
import { StudentTeam } from '../../entities/StudentTeam';
class CreateTeamUseCase {

    constructor( private teamRepository: ITeamRepository, private studentRepository: IStudentRepository) {};

    async execute(data: ICreateTeamDTO): Promise<void> {

        const nameAlreayExists = await this.teamRepository.findByName(data.name);

        if (nameAlreayExists) {
            throw new Error('Team name already exists');
        };

        const team = new Team(data);

        let students: StudentTeam[] = [];

        data.students.map( async st => {

            const userExists = await this.studentRepository.findById(st.studentId);

            if (!userExists) {
                throw new Error(`Student with id ${st.studentId} does not exists`);
            };

            students.push({
                studentId: st.studentId,
                teamId: team.id
            });
        });

        await this.teamRepository.save(team, students);
    
    };

};

export { CreateTeamUseCase };