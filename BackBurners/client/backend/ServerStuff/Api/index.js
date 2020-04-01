const router = require('express').Router();

router.use('/transaction', require('./trans'));
router.use('/budget', require('./budget'));
router.use('/user', require('./user'));
router.use('/plaid', require('./plaid'));

router.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

module.exports = router;