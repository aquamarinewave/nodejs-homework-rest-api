const jwt = require('jsonwebtoken');
const { HttpError } = require("../../helpers");
const { credSchema } = require("../../schemas");
const { User } = require("../../schemas");
const bcrypt = require('bcrypt');
const { SECRET_KEY } = process.env;

exports.loginUser = async (req, res, next) => {
  try {
    const { error } = credSchema.validate(req.body);
    if (error) {
      throw HttpError(400, "missing required name field");
    }
    const { email, password } = req.body;
    const currentUser = await User.findOne({ email });
    if (!currentUser) {
      throw HttpError(401, "Email or password is wrong");
    }
    const { password: passwordHash, _id } = currentUser;
    const isLogedIn = await bcrypt.compare(password, passwordHash);
    if (!isLogedIn) {
      throw HttpError(401, "Email or password is wrong");
    }
     const payload = {
      id: _id,
    };
    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "6d" });
    await User.findByIdAndUpdate(_id, { token });

    const result = {
      token,
      user: {
        email,
        subscription: "starter"
      }
    };
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};
