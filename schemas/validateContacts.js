const Joi = require("joi");

const addSchema = Joi.object({
  name: Joi.string()
    .regex(/^[\p{L}\s]+$/u)
    .min(3)
    .max(30)
    .trim()
    .required(),

  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    })
    .required(),
  phone: Joi.string()
    .regex(/^[\d\-+\s()]+$/)
    .min(10)
    .max(15)
    .trim()
    .required(),
});

const updateFavoriteSchema = Joi.object({
  favorite: Joi.boolean().required(),
});

module.exports = {
  addSchema,
  updateFavoriteSchema
};
