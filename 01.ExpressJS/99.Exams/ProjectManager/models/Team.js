const { Schema, model } = require('mongoose');

const teamSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please add name of the team'],
    unique: true,
  },
  projects: [{ type: Schema.Types.ObjectId, ref: 'Project' }],
  members: [{ type: Schema.Types.ObjectId, ref: 'User' }],
});

module.exports = model('Team', teamSchema);
