const { HttpError } = require("../../helpers");
const { Contact } = require("../../schemas");

exports.deleteContactById = async (req, res, next) => {
   try {
    const { contactId } = req.params;
    const result = await Contact.findByIdAndRemove(contactId);
    if (!result) {
      throw HttpError(404, "Not found");
    }
    res.json({ message: "Contact deleted" });
  } catch (error) {
    next(error);
  }
};
