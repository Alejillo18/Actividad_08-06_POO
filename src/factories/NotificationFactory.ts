import { INotificationChannel } from './INotificationChannel';
import { EmailChannel } from './EmailChannel';
import { SMSChannel } from './SMSChannel';

export class NotificationFactory {
    public static createChannel(preference: string): INotificationChannel {
        if (preference.toLowerCase() === 'sms') {
            return new SMSChannel();
        }
        return new EmailChannel();
    }
}