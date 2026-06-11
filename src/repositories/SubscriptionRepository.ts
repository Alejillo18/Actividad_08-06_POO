import { ISubscriptionRepository } from './ISubscriptionRepository';
import { Subscription } from '../models/Subscription';
import { DatabaseMemory } from '../config/DatabaseMemory';

export class SubscriptionRepository implements ISubscriptionRepository {
    private db = DatabaseMemory.getInstance();

    public save(subscription: Subscription): void {
        this.db.subscriptions.set(subscription.id, subscription);
    }

    public findById(id: string): Subscription | undefined {
        return this.db.subscriptions.get(id);
    }

    public findByUserId(userId: string): Subscription | undefined {
        return Array.from(this.db.subscriptions.values()).find(s => s.userId === userId);
    }

    public update(subscription: Subscription): void {
        this.db.subscriptions.set(subscription.id, subscription);
    }
}