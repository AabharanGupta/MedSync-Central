import mongoose from "mongoose";

const feedback = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },
    weight: {
        type: Number,
        required: true,
        min: 0
    },
    height: {
        type: Number,
        required: true,
        min: 0
    },
    bloodPressure: {
        type: String,
        required: true,
        trim: true
    },
    temperature: {
        type: Number,
        required: true
    },
    diagnosis: {
        type: String,
        required: true,
        trim: true
    },
    feedback: {
        type: String,
        default: null // Feedback can be optional initially
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Feedback = mongoose.model('Feedback', feedback);

export default Feedback;
