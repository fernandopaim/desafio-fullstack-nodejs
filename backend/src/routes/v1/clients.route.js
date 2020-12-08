const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const userValidation = require('../../validations/user.validation');
const userController = require('../../controllers/user.controller');

const router = express.Router();

router.post('/validation', (req, resp, next) => {
  if (!!req.query.cpf && cpfValidation(req.query.cpf))
      resp.json({
          status: "ok",
          success: true,
          message: "CPF válido!"
      })
  else if (!!req.query.cnpj && cnpjValidation(req.query.cnpj))
      resp.json({
          status: "ok",
          success: true,
          message: "CNPJ válido!"
      })
  else
      resp.json({
          status: "error",
          success: false,
          message: "Inválido!"
      })
})

const cpfValidation = function(cpf) {
  let cpfArray = cpf.replace(/\D/g, '').split('')

  if (cpfArray.join() === [1,2,3,4,5,6,7,8,9,0,9].join() )
      return false

  let acc = 0
  for(const [k, n] of cpfArray.slice(0, 9).entries() )
      acc += n * (10 - k)

  let firstValidatorNumber = (acc * 10) % 11
  if (firstValidatorNumber === 10 || firstValidatorNumber === 11)
      firstValidatorNumber = 0

  if (firstValidatorNumber !== parseInt(cpfArray[9]))
      return false

  acc = 0
  for(const [k, n] of cpfArray.slice(0, 9).entries() )
      acc += n * (11 - k)

  let secondValidatorNumber = (acc * 10) % 11
  if (secondValidatorNumber === 10 || secondValidatorNumber === 11)
      secondValidatorNumber = 0

  if (secondValidatorNumber !== parseInt(cpfArray[10]))
      return false

  return true
}

const cnpjValidation = function(cnpj) {
  let cnpjArray = cnpj.replace(/\D/g, '').split('')

  let acc = 0
  for(const [k, n] of cnpjArray.slice(0, 12).reverse().entries() )
      acc += n * ((k%8)+2)

  let firstValidatorNumber = acc % 11
  if (firstValidatorNumber === 0 || firstValidatorNumber === 1)
      firstValidatorNumber = 0
  else
      firstValidatorNumber = 11 - firstValidatorNumber

  if (firstValidatorNumber !== parseInt(cnpjArray[12]))
      return false

  acc = 0
  for(const [k, n] of cnpjArray.slice(0, 13).reverse().entries() )
      acc += n * ((k%8)+2)

  let secondValidatorNumber = acc % 11
  if (secondValidatorNumber === 0 || secondValidatorNumber === 1)
      secondValidatorNumber = 0
  else
      secondValidatorNumber = 11 - secondValidatorNumber

  if (secondValidatorNumber !== parseInt(cnpjArray[13]))
      return false

  return true
}

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Clients
 *   description: registration of new customers without authentication
 */

/**
 * @swagger
 * path:
 *  /users:
 *    get:
 *      summary: Get all users
 *      description: Only admins can retrieve all users.
 *      tags: [Users]
 *      security:
 *        - bearerAuth: []
 *      parameters:
 *        - in: query
 *          name: name
 *          schema:
 *            type: string
 *          description: User name
 *        - in: query
 *          name: role
 *          schema:
 *            type: string
 *          description: User role
 *        - in: query
 *          name: sortBy
 *          schema:
 *            type: string
 *          description: sort by query in the form of field:desc/asc (ex. name:asc)
 *        - in: query
 *          name: limit
 *          schema:
 *            type: integer
 *            minimum: 1
 *          default: 10
 *          description: Maximum number of users
 *        - in: query
 *          name: page
 *          schema:
 *            type: integer
 *            minimum: 1
 *            default: 1
 *          description: Page number
 *      responses:
 *        "200":
 *          description: OK
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  results:
 *                    type: array
 *                    items:
 *                      $ref: '#/components/schemas/User'
 *                  page:
 *                    type: integer
 *                    example: 1
 *                  limit:
 *                    type: integer
 *                    example: 10
 *                  totalPages:
 *                    type: integer
 *                    example: 1
 *                  totalResults:
 *                    type: integer
 *                    example: 1
 *        "401":
 *          $ref: '#/components/responses/Unauthorized'
 *        "403":
 *          $ref: '#/components/responses/Forbidden'
 */
