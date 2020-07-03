import { Document } from 'mongoose';

export interface News extends Document {
    readonly title: string;
    readonly text: string;
    readonly link: string;
    readonly created_at: Date;
}