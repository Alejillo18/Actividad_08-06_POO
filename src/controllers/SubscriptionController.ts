import { SubscriptionService } from '../services/SubscriptionService';
import { PaymentService } from '../services/PaymentService';

export class SubscriptionController {
    constructor(
        private subscriptionService: SubscriptionService,
        private paymentService: PaymentService
    ) {}

    public subscribe(userId: string, planType: string, price: number): string {
        const subscription = this.subscriptionService.createSubscription(userId, planType, price);
        return JSON.stringify({ status: "created", subscriptionId: subscription.id });
    }

    public pay(subscriptionId: string): string {
        this.paymentService.processPayment(subscriptionId);
        return JSON.stringify({ status: "paid" });
    }
}