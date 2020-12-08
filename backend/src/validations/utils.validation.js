const Joi = require('joi');
const { cpf, cnpj } = require('./custom.validation');

const cpfValidation = {
  body: Joi.object().keys({
    cpf: Joi.string().required().custom(cpf),
  }),
};

const cnpjValidation = {
  body: Joi.object().keys({
    cnpj: Joi.string().required().custom(cnpj),
  }),
};

module.exports = {
  cpfValidation,
  cnpjValidation,
};
