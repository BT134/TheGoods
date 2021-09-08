const router = require('express').Router();
const userRoutes = require('./userRoutes');
const categoryRoutes = require('./categoryRoutes');
const articleRoutes = require('./articleRoutes');
const removeRoutes = require('./category-removeRoutes');

router.use('/users', userRoutes);
router.use('/categories', categoryRoutes);
router.use('/articles', articleRoutes);
router.use('/remove', removeRoutes);

module.exports = router;