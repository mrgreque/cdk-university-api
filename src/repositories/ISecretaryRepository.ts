import { Secretary } from "../entities/Secretary";

export interface ISecretaryRepository {
    findByCpf(cpf: string): Promise<Secretary>;
    findById(id: string): Promise<Secretary>;
    findAll(): Promise<Secretary[]>;
    save(secretary: Secretary): Promise<void>;
    alter(secretary: Secretary): Promise<void>;
    drop(secretary: Secretary): Promise<void>;
}