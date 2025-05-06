const express = require('express');
const mongoose = require('mongoose');
const studentRoutes = require('./routes/StudentRoutes');

const app = express();
app.use(express.json());

// Connect MongoDB
mongoose.connect('mongodb+srv://sakshi:IVITymVEHoFldvmm@maratha.7ykqm.mongodb.net/Demo_API', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use(express.static('public'));

// Use Routes
app.use('/api/students', studentRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
