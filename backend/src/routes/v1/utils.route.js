const express = require('express');
const validate = require('../../middlewares/validate');
const customValidation = require('../../validations/utils.validation');
const utilsController = require('../../controllers/utils.controller');

const router = express.Router();

router.post('/validation/cpf', validate(customValidation.cpfValidation), utilsController.cpf);
router.post('/validation/cnpj', validate(customValidation.cnpjValidation), utilsController.cnpj);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Utils
 *   description: util endpoints for validations and checks
 */

/**
 * @swagger
 * path:
 *  /utils/validation/cpf:
 *    post:
 *      summary: Validate CPF numbers
 *      description: Public endpoint for validations
 *      tags: [Utils]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              required:
 *                - cpf
 *              properties:
 *                cpf:
 *                  type: string
 *                  format: cpf
 *                  minLength: 12
 *                  description: At least eleven numbers with or without formatting
 *              example:
 *                cpf: 123.456.789-09
 *      responses:
 *        "200":
 *          description: OK
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  success:
 *                    type: boolean
 *                    example: true
 *                  message:
 *                    type: string
 *                    example: valid CPF!
 *        "400":
 *          description: Bad Request
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  code:
 *                    type: integer
 *                    example: 400
 *                  message:
 *                    type: string
 *                    example: this is a generic CPF
 */

/**
 * @swagger
 * path:
 *  /utils/validation/cnpj:
 *    post:
 *      summary: Validate CPF numbers
 *      description: Public endpoint for validations
 *      tags: [Utils]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              required:
 *                - cnpj
 *              properties:
 *                cnpj:
 *                  type: string
 *                  format: cnpj
 *                  minLength: 12
 *                  description: At least eleven numbers with or without formatting
 *              example:
 *                cnpj: 00.276.174/0001-81
 *      responses:
 *        "200":
 *          description: OK
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  success:
 *                    type: boolean
 *                    example: true
 *                  message:
 *                    type: string
 *                    example: valid CNPJ!
 *        "400":
 *          description: Bad Request
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  code:
 *                    type: integer
 *                    example: 400
 *                  message:
 *                    type: string
 *                    example: invalid CNPJ! Please check the numbers provided
 */
