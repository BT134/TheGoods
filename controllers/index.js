const router = require('express').Router();
const articleRoutes = require('./api');
const homeRoutes = require('./homeRoutes.js');

router.use('/', homeRoutes);
router.use('/api', articleRoutes);

module.exports = router;