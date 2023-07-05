const { createUser } = require("./createUser");
const { loginUser } = require("./loginUser");
const { logoutUser } = require("./logoutUser");
const { verifyAccount } = require("./verifyAccount");
const { resendVerifyToken } = require("./resendVerifyToken");

module.exports = {
  createUser,
  loginUser,
  logoutUser,
  verifyAccount,
  resendVerifyToken,
};
