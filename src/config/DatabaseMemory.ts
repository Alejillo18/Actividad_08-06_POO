import { User } from '../models/User';
import { Subscription } from '../models/Subscription';

export class DatabaseMemory {
    private static instance: DatabaseMemory;
    public users: Map<string, User> = new Map();
    public subscriptions: Map<string, Subscription> = new Map();

    private constructor() {}

    public static getInstance(): DatabaseMemory {
        if (!DatabaseMemory.instance) {
            DatabaseMemory.instance = new DatabaseMemory();
        }
        return DatabaseMemory.instance;
    }
}