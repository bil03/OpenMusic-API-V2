const Joi = require('joi');

const User_PayloadSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
  fullname: Joi.string().required(),
});

module.exports = { User_PayloadSchema };
