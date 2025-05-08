const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
    name: String,
    address: String,
    phone: String,
    bankAccount: String,
    ownerId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    createdAt: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('Restaurant', restaurantSchema);