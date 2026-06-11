import { Subscription } from '../models/Subscription';

export interface ISubscriptionRepository {
    save(subscription: Subscription): void;
    findById(id: string): Subscription | undefined;
    findByUserId(userId: string): Subscription | undefined;
    update(subscription: Subscription): void;
}