import { client } from '../../entities/Client';
import { StudentTeam } from '../../entities/StudentTeam';
import { Team } from '../../entities/Team';
import { ITeamRepository } from './../ITeamRepository';

export interface IStudentTeam {
    student: {
        connect: {
            id: string;
        }
    }
};

export class PrismaTeamRepository implements ITeamRepository {
    
    async save(team: Team, studentsTeam: StudentTeam[]): Promise<void> {

        let students: IStudentTeam[] = [];

        await Promise.all(studentsTeam.map( async st => {

            students.push({
                student: {
                    connect: {
                        id: st.studentId
                    }
                }
            });

        }));
        
        await client.team.create({
            data: {
                id: team.id,
                name: team.name,
                description: team.description,
                teacherId: team.teacherId,
                students: {
                    create: students
                }
            }
        });  
    };

    async findByName(name: string): Promise<Team> {
        return await client.team.findFirst({
            where: {
                name
            }
        });
    };
}