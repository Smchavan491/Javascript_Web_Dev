const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const assignmentRoutes = require('./routes/assignmentRoutes');

const app = express();
app.use(express.json());
app.use('/api/assignments', assignmentRoutes);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(5000, () => console.log("Server running on port 5000")))
    .catch(err => console.log(err));
