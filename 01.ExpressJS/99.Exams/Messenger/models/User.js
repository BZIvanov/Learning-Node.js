const { Schema, model } = require('mongoose');
const encryption = require('../util/encryption');

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, 'Username is required.'],
    unique: true,
  },
  hashedPass: { type: String, required: true },
  firstName: { type: String },
  lastName: { type: String },
  salt: {
    type: String,
    required: [true, 'Salt is required.'],
  },
  blockedUsers: [{ String }],
  roles: [{ type: String }],
});

userSchema.method({
  authenticate: function (password) {
    return (
      encryption.generateHashedPassword(this.salt, password) === this.hashedPass
    );
  },

  isInRole: function (role) {
    return this.roles.indexOf(role) !== -1;
  },
});

const User = model('User', userSchema);

module.exports = User;
