var router = require('express').Router();
var path = require("path")
router.get('*', function(req, resp) {
	resp.sendFile(path.join(__dirname, '../public/index.html'));
});
router.get('/notes', function(req, resp) {
	resp.sendFile(path.join(__dirname, '../public/notes.html'));
});
module.exports = router;
