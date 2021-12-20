import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    singles_win: {
        type: Number,
        default: 0
    },
    singles_draw: {
        type: Number,
        default: 0
    },
    singles_lose: {
        type: Number,
        default: 0
    },
    doubles_win: {
        type: Number,
        default: 0
    },
    doubles_draw: {
        type: Number,
        default: 0
    },
    doubles_lose: {
        type: Number,
        default: 0
    },
    singles_points: {
        type: Number,
        default: 0
    },
    doubles_points: {
        type: Number,
        default: 0
    },
    sets_timing: [Number]
});

const user = mongoose.model('user', userSchema);

export default user;