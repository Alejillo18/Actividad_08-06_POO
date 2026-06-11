import { User } from '../models/User';

export interface IUserRepository {
    save(user: User): void;
    findById(id: string): User | undefined;
    update(user: User): void;
}