/* -------------------------------------------------------------------------- */
/*           separated out routes to later require on server.js file          */
/* -------------------------------------------------------------------------- */

const router = require("express").Router()
const notes = require("../db/notesclass")

/* ----------------------------- GET NOTE ROUTE ----------------------------- */

router.get("/notes", function(req, res){
    notes.getNotes()
    .then((data) => {
        res.json(data)
    })
})

/* ----------------------------- POST NOTE ROUTE ---------------------------- */

router.post("/notes", function(req, res){
    notes.addNotes(req.body)
    .then((data) => {
        res.json(data)
    })
})

/* ---------------------------- DELETE NOTE ROUTE --------------------------- */

router.delete("/notes/:id", function(req, res){
    notes.deletedNotes(req.params.id)
    .then(() => 
        res.json({ok: true}))
})
module.exports = router