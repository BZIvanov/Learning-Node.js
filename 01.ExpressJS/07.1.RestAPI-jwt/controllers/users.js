const status = require('http-status');
const { User, validateRegister, validateLogin } = require('../models/user');
const catchAsync = require('../middlewares/catch-async');

module.exports.register = catchAsync(async (req, res) => {
  const error = validateRegister(req.body);
  if (error) {
    return res
      .status(status.BAD_REQUEST)
      .json({ success: false, message: error.details[0].message });
  }

  const { name, email, password } = req.body;
  const isExistingUser = await User.findOne({ email });
  if (isExistingUser) {
    return res
      .status(status.BAD_REQUEST)
      .json({ success: false, message: 'User already exists.' });
  }

  const newUser = new User({ name, email, password });
  await newUser.save();

  const token = newUser.generateAuthToken();

  return res
    .header('Authorization', `Bearer ${token}`)
    .status(status.CREATED)
    .json({
      success: true,
      message: 'User created.',
    });
});

module.exports.login = catchAsync(async (req, res) => {
  const error = validateLogin(req.body);
  if (error) {
    return res
      .status(status.BAD_REQUEST)
      .json({ success: false, message: error.details[0].message });
  }

  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res
      .status(status.BAD_REQUEST)
      .json({ success: false, message: 'Invalid email or password.' });
  }

  const isPasswordCorrect = await user.isPasswordCorrect(password);
  if (!isPasswordCorrect) {
    return res
      .status(status.BAD_REQUEST)
      .json({ success: false, message: 'Invalid email or password.' });
  }

  const token = user.generateAuthToken();

  return res.header('Authorization', `Bearer ${token}`).status(status.OK).json({
    success: true,
    message: 'User login success',
  });
});

module.exports.me = catchAsync(async (req, res) => {
  const user = await User.findById(req.user.id).select('-password -role -__v');
  if (!user) {
    return res.status(status.NOT_FOUND).json({ message: 'User not found!' });
  }

  return res.status(status.OK).json({ success: true, data: user });
});
