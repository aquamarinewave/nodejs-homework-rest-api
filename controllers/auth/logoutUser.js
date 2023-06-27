const { HttpError } = require("../../helpers");
const { User } = require("../../schemas");

exports.logoutUser = async (req, res, next) => {
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
    const { _id } = currentUser;
    const result = await User.findByIdAndUpdate(_id, { token: null });
    if (!result) {
      throw HttpError(401, "Not authorized");
    }
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};
