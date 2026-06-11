import { INotificationChannel } from './INotificationChannel';

export class SMSChannel implements INotificationChannel {
    public send(message: string, recipient: string): void {
        console.log(`[SMS] Enviado a ${recipient}: ${message}`);
    }
}