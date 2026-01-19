const mongoose = require('mongoose');

const dataRecordSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true
    },
    age: {
        type: Number,
        min: 0
    },
    department: String,
    salary: {
        type: Number,
        default: 0
    },
    dateOfJoining: Date,
    isActive: {
        type: Boolean,
        default: true
    },
    sourceFile: String,
    importedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('DataRecord', dataRecordSchema);