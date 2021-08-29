const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema;

const bookingSchema = new mongoose.Schema({
    bookingStartDate: {
        type: Date,
        required: true,
    },
    bookingEndDate: {
        type: Date,
        required: true,
    },
    itemId: [{
        _id: {
            type: ObjectId,
            ref: 'Item',
            required: true
        },
        price: {
            type: Number,
            required: true,
        },
        night: {
            type: Number,
            required: true,
        }
    }],
    city: {
        type: String,
        required: true,
    },
    isPopular: {
        type: Boolean,
    },
    description: {
        type: String,
        required: true,
    },
    memberId: [{
        type: ObjectId,
        ref: 'Member'
    }],
    bankId: [{
        type: ObjectId,
        ref: 'Bank'
    }],
    activityId: [{
        type: ObjectId,
        ref: 'Activity'
    }],
    proofPayment: {
        type: String,
        required: true,
    },
    bankFrom: {
        type: String,
        required: true,
    },
    accountHolder: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('Booking', bookingSchema) 