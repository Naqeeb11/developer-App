const express = require('express');
const router = express.Router();

// @route     GET api/Auth
// @des       Test route
// @access    Public
router.get('/', (req, res) => res.send('Auth route'));

module.exports = router;