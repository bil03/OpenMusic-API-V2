const Joi = require('joi');

const PostAuthentication_PayloadSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

const PutAuthentication_PayloadSchema = Joi.object({
  refreshToken: Joi.string().required(),
});

const DeleteAuthentication_PayloadSchema = Joi.object({
  refreshToken: Joi.string().required(),
});

module.exports = { PostAuthentication_PayloadSchema, PutAuthentication_PayloadSchema, DeleteAuthentication_PayloadSchema };
