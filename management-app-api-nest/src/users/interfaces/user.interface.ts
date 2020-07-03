import { Document } from 'mongoose';

export interface User extends Document {
    readonly first_name: string;
    readonly last_name: string;
    readonly password: string;
    readonly email: string;
    readonly notes: string;
    readonly avatar: string;
    readonly role: string;
    readonly created_at: Date;
}