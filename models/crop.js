const mongoose = require('mongoose');

const agentSchema = new mongoose.Schema({
    agentName: {
        type: String,
        trim: true
    },
    produceType: {
        type: String,
        unique: true,
       
    },
    myQuantity: {
        type: Number,
        trim: true
    },
    plantingDate: {
        type: String,
        trim: true
    },
    
})

module.exports = mongoose.model('Crop', agentSchema);