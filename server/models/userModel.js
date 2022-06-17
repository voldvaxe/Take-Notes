const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        require: true,
        trim: true,
    },
    lastName:{
        type: String,
        require: true,
        trim: true,
    },
    email: {
        type: String,
        require: true,
        trim: true,
        unique: true
    },
    password:{
        type: String,
        require: true,
    },
    notes:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Note', 
        default: []
    }],
}, {
    timestamps: true
})


module.exports = mongoose.model('User', userSchema);