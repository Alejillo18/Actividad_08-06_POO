import { INotificationChannel } from './INotificationChannel';

export class EmailChannel implements INotificationChannel {
    public send(message: string, recipient: string): void {
        console.log(`[Email] Enviado a ${recipient}: ${message}`);
    }
}