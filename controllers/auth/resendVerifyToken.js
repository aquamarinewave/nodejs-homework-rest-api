const { HttpError, sendEmail } = require("../../helpers");
const { User } = require("../../schemas");

exports.resendVerifyToken = async (req, res, next) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      throw HttpError(400, "Not found user by this email");
    }

    const { verificationToken } = user;
    if (!verificationToken) {
      throw HttpError(400, "Verification has already been passed");
    }
    await sendEmail(email, verificationToken);
    res.status(200).json({message: "Verification email sent" });
  } catch (error) {
    next(error);
  }
};
