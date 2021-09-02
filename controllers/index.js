const router = require('express').Router();
const articleRoutes = require('./api');

router.use('/api', articleRoutes);

module.exports = router;