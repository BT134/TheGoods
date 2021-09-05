const router = require('express').Router();
const articleRoutes = require('./api');
const homeRoutes = require('./homeRoutes.js');

router.use('/api', articleRoutes);
router.use('/', homeRoutes);

module.exports = router;