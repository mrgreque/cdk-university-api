import { client } from '../../entities/Client';
import { StudentTeam } from '../../entities/StudentTeam';
import { Team } from '../../entities/Team';
import { ITeamRepository } from './../ITeamRepository';

export interface IStudentTeam {
    student: {
        connect: {
            id: string;
        }
    },
    teacher: {
        connect: {
            id: string;
        }
    }
};

export class PrismaTeamRepository implements ITeamRepository {
    
    async save(team: Team, studentsTeam: StudentTeam[]): Promise<void> {

        // Falta salvar os IDs na tabela StudentTeam

        let students: IStudentTeam[] = [];

        studentsTeam.map( async st => {

            students.push({
                student: {
                    connect: {
                        id: st.studentId
                    }
                },
                teacher: {
                    connect: {
                        id: team.teacherId
                    }
                }
            });
        });

        await client.team.create({
            data: {
                ...team,
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