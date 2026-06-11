import { IObserver } from './IObserver';
import { Subscription } from '../models/Subscription';
import { NotificationFactory } from '../factories/NotificationFactory';
import { IUserRepository } from '../repositories/IUserRepository';

export class EmailNotificationObserver implements IObserver {
    constructor(private userRepo: IUserRepository) {}

    public update(subscription: Subscription): void {
        const user = this.userRepo.findById(subscription.userId);
        if (user) {
            const channel = NotificationFactory.createChannel('email');
            channel.send(`Tu pago por el plan ${subscription.planType} fue procesado. Total: $${subscription.price}`, user.email);
        }
    }
}