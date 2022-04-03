import { client } from '../../entities/Client';
import { Secretary } from '../../entities/Secretary';
import { ISecretaryRepository } from './../ISecretaryRepository';

export class PrismaSecretaryRepository implements ISecretaryRepository{
    
        async findByCpf(cpf: string): Promise<Secretary> {
            const secretary: Secretary = await client.secretary.findUnique({
                where: {
                    cpf
                }
            });
    
            return secretary;
        };

        async findById(id: string): Promise<Secretary> {
            const secretary: Secretary = await client.secretary.findUnique({
                where: {
                    id
                }
            });

            return secretary;
        }
    
        async findAll(): Promise<Secretary[]> {
            const secretaries: Secretary[] = await client.secretary.findMany();
    
            return secretaries;
        };
    
        async save(secretary: Secretary): Promise<void> {
            await client.secretary.create({
                data: secretary
            });
        };
    
        async alter(secretary: Secretary): Promise<void> {
            await client.secretary.update({
                where: {
                    id: secretary.id
                },
                data: secretary
            });
        };
    
        async drop(secretary: Secretary): Promise<void> {
            await client.secretary.delete({
                where: {
                    id: secretary.id
                }           
            });
        };
    
}