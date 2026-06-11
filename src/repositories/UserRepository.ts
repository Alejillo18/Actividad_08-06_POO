import { IUserRepository } from './IUserRepository';
import { User } from '../models/User';
import { DatabaseMemory } from '../config/DatabaseMemory';

export class UserRepository implements IUserRepository {
    private db = DatabaseMemory.getInstance();

    public save(user: User): void {
        this.db.users.set(user.id, user);
    }

    public findById(id: string): User | undefined {
        return this.db.users.get(id);
    }

    public update(user: User): void {
        this.db.users.set(user.id, user);
    }
}