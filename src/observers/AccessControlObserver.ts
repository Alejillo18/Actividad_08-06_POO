import { IObserver } from './IObserver';
import { Subscription } from '../models/Subscription';
import { IUserRepository } from '../repositories/IUserRepository';

export class AccessControlObserver implements IObserver {
    constructor(private userRepo: IUserRepository) {}

    public update(subscription: Subscription): void {
        const user = this.userRepo.findById(subscription.userId);
        if (user) {
            user.hasPremiumAccess = true;
            this.userRepo.update(user);
            console.log(`[Acceso] Accesos premium activados para el usuario: ${user.name}`);
        }
    }
}