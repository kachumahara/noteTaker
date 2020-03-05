var express = require("express")
var html = require("./route/htmlroute")
var api = require("./route/apiroute")
var app = express()

var PORT = 3000 || process.env.PORT

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))
app.use("/api", api)
app.use("/", html)

app.listen(PORT, function(){
    console.log("listening on PORT: " + PORT)
})
