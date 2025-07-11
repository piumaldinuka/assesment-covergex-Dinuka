const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const tasksRouter = require('../task-app-backend/routes/route');

app.use(cors());
app.use(express.json());

app.use('/api/tasks', tasksRouter);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
