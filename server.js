var express = require("express")
var app = express()

var PORT = 3000 || process.env.PORT

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static("public"))

require("./route/apiroute")(app);
require("./route/htmlroute")(app);

app.listen(PORT, function(){
    console.log("listening on PORT: " + PORT)
})
