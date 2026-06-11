import { ISubscriptionRepository } from '../repositories/ISubscriptionRepository';
import { Subscription } from '../models/Subscription';

export class SubscriptionService {
    constructor(private subscriptionRepo: ISubscriptionRepository) {}

    public createSubscription(userId: string, planType: string, price: number): Subscription {
        const id = Math.random().toString(36).substr(2, 9);
        const subscription = new Subscription(id, userId, planType, price);
        this.subscriptionRepo.save(subscription);
        return subscription;
    }
}