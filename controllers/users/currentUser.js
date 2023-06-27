const { HttpError } = require("../../helpers");
const { User } = require("../../schemas");

exports.currentUser = async (req, res, next) => {
  try {
    const { authorization = "" } = req.headers;
    const [bearer, token] = authorization.split(" ");
    if (bearer !== "Bearer") {
      next(HttpError(401, "Not authorized"));
    }
    const currentUser = await User.findOne({ token });
    if (!currentUser) {
      throw HttpError(401, "Not authorized");
    }
    const { email, subscription } = currentUser;

    res.status(200).json({ email, subscription });
  } catch (error) {
    next(error);
  }
};
