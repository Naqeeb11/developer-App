const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator/check');

const Profile = require("../../models/Profile");
const User = require("../../models/User");

// @route     GET api/profile/me
// @desc      Get current users profile
// @access    Private
router.get('/me', auth, async(req, res) => {
    try {
        const profile = await Profile.findOne({ user: req.user.id }).populate('user', ['name', 'avatar']);

        if (!profile) {
            return res.status(400).json({ msg: 'There is no profile for this user' });
        }

        res.json(profile);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route     Post api/profile
// @desc      Create or update users profile
// @access    Private
router.post('/', [auth, ], (req, res) => {

})
module.exports = router;