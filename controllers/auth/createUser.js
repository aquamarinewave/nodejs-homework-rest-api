const { HttpError } = require("../../helpers");
const { credSchema } = require("../../schemas");
const { User } = require("../../schemas");
const bcrypt = require('bcrypt');
const { SALT_ROUNDS } = process.env;
const gravatar = require("gravatar");


exports.createUser = async (req, res, next) => {
  try {
    const { error } = credSchema.validate(req.body);
    if (error) {
      throw HttpError(400, "missing required name field");
    }
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      throw HttpError(409, "Email already in use");
    }

    const avatarURL = gravatar.url(email);

    const newUser = {
      email, 
      password: await bcrypt.hash(password, parseInt(SALT_ROUNDS)),
      avatarURL,
    }
    const result = await User.create(newUser);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};
