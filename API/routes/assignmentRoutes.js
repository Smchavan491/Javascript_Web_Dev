const express = require('express');
const router = express.Router();
const Assignment = require('../models/Assignment');

//READ all assignments
router.get('/', async (req, res) => {
    const assignments = await Assignment.find();
    res.json(assignments);
});

//CREATE new assignment
router.post('/', async (req, res) => {
    const newAssignment = new Assignment(req.body);
    await newAssignment.save();
    res.status(201).json(newAssignment);
});

// UPDATE assignment by ID
router.put('/:id', async (req, res) => {
    const updated = await Assignment.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
});

//DELETE assignment by ID
router.delete('/:id', async (req, res) => {
    await Assignment.findByIdAndDelete(req.params.id);
    res.json({ message: 'Assignment deleted' });
});

module.exports = router;
