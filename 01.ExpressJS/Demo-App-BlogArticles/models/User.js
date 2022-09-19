const { Schema, model } = require('mongoose');
const encryption = require('../utilities/encryption');

const userSchema = Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    passwordHash: {
      type: String,
      required: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    roles: [{ type: String }],
    salt: {
      type: String,
      required: true,
    },
    articles: [{ type: Schema.Types.ObjectId, ref: 'Article' }],
  },
  {
    usePushEach: true,
  }
);

userSchema.method({
  authenticate: function (password) {
    const inputPasswordHash = encryption.hashPassword(password, this.salt);
    return inputPasswordHash === this.passwordHash;
  },

  isAuthor: function (article) {
    if (!article) {
      return false;
    }

    return article.author._id.toString() === this.id;
  },

  isInRole: function (role) {
    return this.roles.indexOf(role) !== -1;
  },
});

module.exports = model('User', userSchema);
