export interface INotificationChannel {
    send(message: string, recipient: string): void;
}