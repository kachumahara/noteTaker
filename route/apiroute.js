var router = require("express").Router()
var path = require("path")

router.get("/notes", function(req, resp){
path 
.getNotes()
.then(notes => resp.json(notes))
.catch(err => resp.status(500).json(err));

});
router.post("/notes", (req, res) => {
    path.addNote(re.body)
    .then((note) => res.json(note))
    .catch(err => res.status(500).json(err));
});
module.exports = router