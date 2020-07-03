import * as mongoose from 'mongoose';

export const NewsSchema = new mongoose.Schema({
    title: String,
    text: String,
    link: String,
    created_at: { type: Date, default: Date.now }
});