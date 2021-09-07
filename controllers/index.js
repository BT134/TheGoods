const router = require('express').Router();
const articleRoutes = require('./api');
const homeRoutes = require('./homeRoutes.js');
const newsRoutes = require('./newsApiRoute');

router.use('/', homeRoutes);
router.use('/news', newsRoutes);
router.use('/api', articleRoutes);

module.exports = router;