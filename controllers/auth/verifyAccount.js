const { HttpError } = require("../../helpers");
const { User } = require("../../schemas");

exports.verifyAccount = async (req, res, next) => {
  try {
    const { verificationToken = "" } = req.params;
    if (!verificationToken) {
      throw HttpError(404, "User not found");
    }
    const currentUser = await User.findOne({ verificationToken });
    if (!currentUser) {
      throw HttpError(404, "User not found");
    }
    const { _id } = currentUser;
    const result = await User.findByIdAndUpdate(_id, {
      verificationToken: null,
      verify: true,
    });
    if (!result) {
      throw HttpError(404, "User not found");
    }
    res.status(200).json({ message: "Verification successful"});
  } catch (error) {
    next(error);
  }
};
