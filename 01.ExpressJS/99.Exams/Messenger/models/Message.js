const { Schema, model } = require('mongoose');

const messageSchema = new Schema({
  content: {
    type: String,
    required: [true, 'Message content is required.'],
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Message needs User(receiver)'],
  },
  thread: {
    type: Schema.Types.ObjectId,
    required: [true, 'Message needs the thread it belongs to.'],
  },
});

module.exports = model('Message', messageSchema);
