"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
exports.UserSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    notes: String,
    avatar: String,
    role: { type: String, enum: ['PRINCIPAL', 'TEACHER', 'STUDENT'] },
    created_at: { type: Date, default: Date.now }
});
exports.UserSchema.pre('save', function (next) {
    let user = this;
    if (!user.isModified('password'))
        return next();
    bcrypt.genSalt(10, (err, salt) => {
        if (err)
            return next(err);
        bcrypt.hash(user.password, salt, (err, hash) => {
            if (err)
                return next(err);
            user.password = hash;
            next();
        });
    });
});
exports.UserSchema.methods.checkPassword = function (attempt, callback) {
    let user = this;
    bcrypt.compare(attempt, user.password, (err, isMatch) => {
        if (err)
            return callback(err);
        callback(null, isMatch);
    });
};
//# sourceMappingURL=user.schema.js.map