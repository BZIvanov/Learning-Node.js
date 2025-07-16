const { status: httpStatus } = require("http-status");
const { User } = require("../models/user");
const catchAsync = require("../middlewares/catch-async");

const register = catchAsync(async (req, res) => {
  const { name, email, password } = req.body;
  const isExistingUser = await User.findOne({ email });
  if (isExistingUser) {
    return res
      .status(httpStatus.BAD_REQUEST)
      .json({ success: false, message: "User already exists." });
  }

  const newUser = new User({ name, email, password });
  await newUser.save();

  const token = newUser.generateAuthToken();

  return res
    .header("Authorization", `Bearer ${token}`)
    .status(httpStatus.CREATED)
    .json({
      success: true,
      message: "User created.",
    });
});

const login = catchAsync(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res
      .status(httpStatus.BAD_REQUEST)
      .json({ success: false, message: "Invalid email or password." });
  }

  const isPasswordCorrect = await user.isPasswordCorrect(password);
  if (!isPasswordCorrect) {
    return res
      .status(httpStatus.BAD_REQUEST)
      .json({ success: false, message: "Invalid email or password." });
  }

  const token = user.generateAuthToken();

  return res
    .header("Authorization", `Bearer ${token}`)
    .status(httpStatus.OK)
    .json({
      success: true,
      message: "User login success",
    });
});

const me = catchAsync(async (req, res) => {
  const user = await User.findById(req.user.id).select("-password -role -__v");
  if (!user) {
    return res
      .status(httpStatus.NOT_FOUND)
      .json({ success: false, message: "User not found!" });
  }

  return res.status(httpStatus.OK).json({ success: true, data: user });
});

module.exports = {
  register,
  login,
  me,
};
