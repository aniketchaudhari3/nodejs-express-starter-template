const express = require('express')
const models = require('../models/data')
const router = express.Router();

var bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({ extended: false })


router.get('/login', (req, res) => {
	return res.send(models.users)
});

router.post('/login', urlencodedParser, (req, res) => {
	let username = req.body.username
	let password = req.body.password

	// find user with data
	if (username && password) {
		models.users.map(user => {
			if (user.username === username && user.password === password) {
				return res.json({ loggedin: true })
			} else {
				return res.json({ loggedin: false })
			}
		})
	}
	// last case
	return res.json({ status: 'user not found' })
})

module.exports = router;