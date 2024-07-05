const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema(
  {
    description: String,
    topic: {
      type: String,
      unique: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Tasks', taskSchema);
