// Dependencies
var express = require("express");
var app = express();
var uuid = require("uuid").v4;
var path = require("path");
var fs = require("fs");
var util = require("util");
var PORT = process.env.PORT || 3000;


var dataNote = [];
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static("public"))

// api routes 
app.get("/api/notes", function(req,res) {
    fs.readFile(__dirname + "/db/db.json", "utf8", function(err, data) {
        if (err) throw err;
        var notes = JSON.parse(data);
        res.json(notes);
        
    })
});

app.post("/api/notes", function(req,res) {
    let newNote = req.body;
    newNote.id = uuid();

    fs.readFile(__dirname + "/db/db.json", "utf8", (err, data) => { 

    
    if (err) throw err;
    var notes = JSON.parse(data);
    notes.push(newNote);
    fs.writeFile(__dirname + "/db/db.json", JSON.stringify(notes), (err) => {
        if (err) throw err;
        res.json(newNote);
    })
})
});

// function that returns a response of note not found

app.delete("/api/notes/:id", function(req,res) {
    var noteIdToDelete = req.params.id;
    var noteDeleted = false;
    fs.readFile(__dirname + "/db/db.json", "utf8", (err , data) => {
        if (err) throw err;
        var notes = JSON.parse(data);
        for ( var i = 0; i < notes.length && !notesDeleted; i++) {
            if (notes[i].id === noteIdToDelete) {
            console.log(notes[i].id);
            notes.splice(i, 1);
            noteDeleted = true;
        }
    }
    fs.writeFile(__dirname + "/db/db.json", JSON.stringify(notes), (err) => {
        if (err) throw err;
        res.json(notes);
    })
    })
});
app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/notes.html"))
})
app.get("*", function(req,res) {
    res.sendFile(path.join(__dirname, "/public/index.html"))
})

// require("./route/apiroute")(app);
// require("./route/htmlroute")(app);

app.listen(PORT, function() {
    console.log("listening on PORT: " + PORT)
})
