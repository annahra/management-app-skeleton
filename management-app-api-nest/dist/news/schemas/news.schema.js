"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.NewsSchema = new mongoose.Schema({
    title: String,
    text: String,
    link: String,
    created_at: { type: Date, default: Date.now }
});
//# sourceMappingURL=news.schema.js.map