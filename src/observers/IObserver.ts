import { Subscription } from '../models/Subscription';

export interface IObserver {
    update(subscription: Subscription): void;
}