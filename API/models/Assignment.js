const mongoose = require('mongoose');

const assignmentSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    dueDate: Date
});

module.exports = mongoose.model('Assignment', assignmentSchema);
