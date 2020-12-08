const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const clientsRoute = require('./clients.route');
const utilsRoute = require('./utils.route');
const docsRoute = require('./docs.route');

const router = express.Router();

router.use('/auth', authRoute);
router.use('/users', userRoute);
router.use('/clients', clientsRoute);
router.use('/utils', utilsRoute);
router.use('/docs', docsRoute);

module.exports = router;
