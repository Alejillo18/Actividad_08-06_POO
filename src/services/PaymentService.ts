import { IObserver } from '../observers/IObserver';
import { Subscription } from '../models/Subscription';
import { ISubscriptionRepository } from '../repositories/ISubscriptionRepository';

export class PaymentService {
    private observers: IObserver[] = [];

    constructor(private subscriptionRepo: ISubscriptionRepository) {}

    public attach(observer: IObserver): void {
        this.observers.push(observer);
    }

    public processPayment(subscriptionId: string): void {
        const subscription = this.subscriptionRepo.findById(subscriptionId);
        if (!subscription) {
            throw new Error("Suscripción no encontrada");
        }

        subscription.isActive = true;
        this.subscriptionRepo.update(subscription);
        console.log(`[Pago] Pago procesado con éxito para la suscripción: ${subscriptionId}`);

        this.notifyAll(subscription);
    }

    private notifyAll(subscription: Subscription): void {
        for (const observer of this.observers) {
            observer.update(subscription);
        }
    }
}