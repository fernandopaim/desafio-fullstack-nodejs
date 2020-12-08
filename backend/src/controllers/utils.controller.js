const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');

const cpf = catchAsync(async (req, res) => {
  res.status(httpStatus.OK).send({
    success: true,
    message: "valid CPF!"
  });
});

const cnpj = catchAsync(async (req, res) => {
  res.status(httpStatus.OK).send({
    success: true,
    message: "valid CNPJ!"
  });
});

module.exports = {
  cpf,
  cnpj,
};
