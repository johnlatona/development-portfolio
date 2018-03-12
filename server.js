var express = require("express");
var PORT = process.env.PORT || 3001;
var router = require("express").Router();
var path = require('path');
var app = express();

//Serve static content for the app from the "public" directory in the application directory.
if (process.env.NODE_ENV === "production") {
    console.log("YOU ARE IN THE PRODUCTION ENV");
    app.use('/img', express.static(path.join(__dirname, './client/build/img')));
    app.use('/static', express.static(path.join(__dirname, './client/build/static')));
    app.use('/video', express.static(path.join(__dirname, './client/build/video')));
    
    //Production route handling
    router.get("/:route", function(req, res) {
        res.sendFile(path.join(__dirname, "./client/build/index.html"))
    })
}

app.use(express.static(path.join(__dirname, "public")));

//local route handling
router.get("/:route", function(req, res) {
    res.sendFile(path.join(__dirname, "./client/src/public/index.html"))
})


app.listen(PORT, function() {
    console.log("App now listening on localhost:" + PORT);
});