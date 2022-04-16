import { Team } from "../entities/Team";
import { StudentTeam } from '../entities/StudentTeam';

export interface ITeamRepository {
    save(team: Team, students: StudentTeam[]): Promise<void>;
    findByName(name: string): Promise<Team>;
};