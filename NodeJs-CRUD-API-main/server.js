const express = require('express');
const server = express();

const cors = require('cors');
const morgan = require('morgan');

// import routers
const taskRoutes = require('./routes');

// routers
server.use(cors());
server.use(morgan('dev'));
server.use(express.json());

// database
const connectDB = require('./db/connect');

// routers
server.use('/api/v1/task', taskRoutes);

// config server port
const port = process.env.PORT || 5000;
const url = process.env.URI || 'mongodb://localhost:27017/crud-01';
const start = async () => {
  try {
    await connectDB(url);
    server.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
