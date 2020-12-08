const express = require('express');
const statisticsController = require('../../controllers/statistics.controller');

const router = express.Router();

router.get('/getAll', statisticsController.statistic);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Statistics
 *   description: statistics endpoints
 */

/**
 * @swagger
 * path:
 *  /statistics/getAll:
 *    get:
 *      summary: Validate CPF numbers
 *      description: Public endpoint for validations
 *      tags: [Statistics]
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
