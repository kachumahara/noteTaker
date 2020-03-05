var express = require("express")
var html = require("./route/htmlroute")
var api = require("./route/apiroute")
var app = express()
var path = require("path")

var PORT = 3000 || process.env.PORT

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static("public"))

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });

app.listen(PORT, function(){
    console.log("listening on PORT: " + PORT)
})
