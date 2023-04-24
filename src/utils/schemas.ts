import Joi from 'joi';

const loginSchema = Joi.object({
  username: Joi.string().required().label('username'),
  password: Joi.string().required().label('password'),
}).messages({
  'string.empty': '{#label} is required',
});

export default loginSchema;