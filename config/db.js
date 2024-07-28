const mongoose = require('mongoose');

const local = "mongodb+srv://nguyentu:l7p8DaAwe8CPgkbR@cluster0.duzoexy.mongodb.net/server";

const connect = async () => {
    try {
        await mongoose.connect(local);
        console.log('Connect success');
    } catch (error) {
        console.error('Connection to MongoDB failed:', error);
    }
}

module.exports = { connect };