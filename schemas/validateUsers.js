const Joi = require("joi");

const credSchema = Joi.object({
  
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    })
    .required(),
  password: Joi.string()
    .regex(/^[\p{L}\s]+$/u)
    .min(3)
    .max(30)
    .trim()
    .required(),

});

module.exports = {
  credSchema,
};
