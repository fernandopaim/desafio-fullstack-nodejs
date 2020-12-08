const objectId = (value, helpers) => {
  if (!value.match(/^[0-9a-fA-F]{24}$/)) {
    return helpers.message('"{{#label}}" must be a valid mongo id');
  }
  return value;
};

const password = (value, helpers) => {
  if (value.length < 8) {
    return helpers.message('password must be at least 8 characters');
  }
  if (!value.match(/\d/) || !value.match(/[a-zA-Z]/)) {
    return helpers.message('password must contain at least 1 letter and 1 number');
  }
  return value;
};

const cpf = function (value, helpers) {
  let cpfArray = value.replace(/\D/g, '').split('')

  if (cpfArray.join() === [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 9].join())
    return helpers.message('this is a generic CPF')

  let acc = 0
  for (const [k, n] of cpfArray.slice(0, 9).entries())
    acc += n * (10 - k)

  let firstValidatorNumber = (acc * 10) % 11
  if (firstValidatorNumber === 10 || firstValidatorNumber === 11)
    firstValidatorNumber = 0

  if (firstValidatorNumber !== parseInt(cpfArray[9]))
    return helpers.message('invalid CPF! Please check the numbers provided')

  acc = 0
  for (const [k, n] of cpfArray.slice(0, 9).entries())
    acc += n * (11 - k)

  let secondValidatorNumber = (acc * 10) % 11
  if (secondValidatorNumber === 10 || secondValidatorNumber === 11)
    secondValidatorNumber = 0

  if (secondValidatorNumber !== parseInt(cpfArray[10]))
    return helpers.message('invalid CPF! Please check the numbers provided')

  return value
}

const cnpj = function (value, helpers) {
  let cnpjArray = value.replace(/\D/g, '').split('')

  let acc = 0
  for (const [k, n] of cnpjArray.slice(0, 12).reverse().entries())
    acc += n * ((k % 8) + 2)

  let firstValidatorNumber = acc % 11
  if (firstValidatorNumber === 0 || firstValidatorNumber === 1)
    firstValidatorNumber = 0
  else
    firstValidatorNumber = 11 - firstValidatorNumber

  if (firstValidatorNumber !== parseInt(cnpjArray[12]))
    return helpers.message('invalid CNPJ! Please check the numbers provided')

  acc = 0
  for (const [k, n] of cnpjArray.slice(0, 13).reverse().entries())
    acc += n * ((k % 8) + 2)

  let secondValidatorNumber = acc % 11
  if (secondValidatorNumber === 0 || secondValidatorNumber === 1)
    secondValidatorNumber = 0
  else
    secondValidatorNumber = 11 - secondValidatorNumber

  if (secondValidatorNumber !== parseInt(cnpjArray[13]))
    return helpers.message('invalid CNPJ! Please check the numbers provided')

  return value
}

module.exports = {
  objectId,
  password,
  cpf,
  cnpj,
};
