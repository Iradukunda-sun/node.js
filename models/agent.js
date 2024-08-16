const mongoose = require('mongoose');

const agentSchema = new mongoose.Schema({
    agentName: {
        type: String,
        trim: true
    },
    agentEmail: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true
    },
    agentPhone: {
        type: Number,
        trim: true, 
    },
    agentAddress: {
        type: String,
        trim: true
    },
    
})

module.exports = mongoose.model('Agent', agentSchema);