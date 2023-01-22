const crypto = require('crypto');

module.exports = {
  hashPassword: (password, salt) => {
    return crypto.createHmac('sha256', salt).update(password).digest('hex');
  },
};
