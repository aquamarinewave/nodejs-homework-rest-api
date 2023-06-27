const { HttpError } = require("../../helpers");
const { addSchema } = require("../../schemas");
const { Contact } = require("../../schemas");

exports.createContact = async (req, res, next) => {
  try {
    const { error } = addSchema.validate(req.body);
   if (error) {
      throw HttpError(400, "missing required name field");
    }
    const result = await Contact.create(req.body);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};
