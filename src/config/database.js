const mongoose = require('mongoose');

module.exports = {
    connectDB : function() {
        mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
    },
};