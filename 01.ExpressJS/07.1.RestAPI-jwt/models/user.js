const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Joi = require('joi');

const userSchema = new Schema(
  {
    name: { type: String, required: true, minlength: 3, maxlength: 20 },
    email: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 50,
      unique: true,
    },
    password: { type: String, required: true, minlength: 5, maxlength: 1024 },
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
    },
  },
  { timestamps: true }
);

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  try {
    this.password = await bcrypt.hash(this.password, 8);
    next();
  } catch (err) {
    next(err);
  }
});

userSchema.methods.generateAuthToken = function () {
  return jwt.sign(
    { id: this._id, name: this.name, isAdmin: this.isAdmin === 'admin' },
    process.env.JWT_SECRET
  );
};

userSchema.methods.isPasswordCorrect = async function (incomingPassword) {
  try {
    // this.password already contains the salt which bcrypt will use
    return await bcrypt.compare(incomingPassword, this.password);
  } catch (err) {
    throw new Error('Error with comparing passwords');
  }
};

const User = model('User', userSchema);

const registerValidationSchema = Joi.object({
  name: Joi.string().min(3).max(20).required(),
  email: Joi.string().min(5).max(50).required().email(),
  password: Joi.string().min(5).max(50).required(),
});

const loginValidationSchema = Joi.object({
  email: Joi.string().min(5).max(50).required().email(),
  password: Joi.string().min(5).max(50).required(),
});

module.exports = {
  User,
  registerValidationSchema,
  loginValidationSchema,
};
