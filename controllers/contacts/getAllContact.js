const { Contact } = require("../../schemas");

exports.getAllContact = async (_, res, next) => {
  try {
    const result = await Contact.find();
    res.json(result);
  } catch (error) {
    next(error);
  }
};
