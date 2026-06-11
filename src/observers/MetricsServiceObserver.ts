import { IObserver } from './IObserver';
import { Subscription } from '../models/Subscription';

export class MetricsServiceObserver implements IObserver {
    private totalRevenue: number = 0;

    public update(subscription: Subscription): void {
        this.totalRevenue += subscription.price;
        console.log(`[Métricas] Ingreso registrado: +$${subscription.price}. Ingresos totales: $${this.totalRevenue}`);
    }
}