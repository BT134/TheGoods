const router = require('express').Router();
//const userRoutes = require('./userRoutes');
//const categoryRoutes = require('./categoryRoutes');
const articleRoutes = require('./articleRoutes');

//router.use('./users', userRoutes);
//router.use('./categories', categoryRoutes);
router.use('./articles', articleRoutes);

module.export = router;