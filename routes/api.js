var express = require('express'),
  router = express.Router();

router.route('/test')
  .get((req, res) => {
    res.json({message:'Hello'})
  })

module.exports = router;
