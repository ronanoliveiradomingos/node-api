const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: { type: String, lowercase: true, unique: true },
    name: String,
    birthday: String,
    bio: String,
    created_at: { type: Date, required: true },
    updated_at: { type: Date, required: true },
});

UserSchema.pre('save', function (next) {
    if (!this.created_at) this.created_at = new Date.now;
    next();
});

UserSchema.pre(['updateOne', 'findOneAndUpdate'], function (next) {
    this.updated_at = new Date.now;
    next();
});

module.exports = mongoose.model('User', UserSchema);