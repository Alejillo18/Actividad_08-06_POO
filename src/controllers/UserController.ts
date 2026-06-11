import { IUserRepository } from '../repositories/IUserRepository';
import { User } from '../models/User';

export class UserController {
    constructor(private userRepo: IUserRepository) {}

    public register(id: string, name: string, email: string, phone: string): string {
        const newUser = new User(id, name, email, phone);
        this.userRepo.save(newUser);
        return JSON.stringify({ status: "success", user: newUser });
    }
}