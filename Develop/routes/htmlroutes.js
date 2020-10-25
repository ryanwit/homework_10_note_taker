/* -------------------------------------------------------------------------- */
/*           separated out routes to later require on server.js file          */
/* -------------------------------------------------------------------------- */

const path = require("path")
const router = require("express").Router()  //stream line way to do routes

/* ------------------------ TAKES USERS TO NOTES PAGE ----------------------- */

router.get("/notes", function(req, res){
    res.sendFile(path.join(__dirname, "../public/notes.html"))
})

/* --------------------------- STAR PATH CATCH ALL -------------------------- */

router.get("*", function(req, res){
    res.sendFile(path.join(__dirname, "../public/index.html"))
})

module.exports = router;