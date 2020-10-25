const router = require("express").Router()
const notes = require("../db/notesclass")
router.get("/notes", function(req, res){
    notes.getNotes()
    .then((data) => {
        res.json(data)
    })
})
router.post("/notes", function(req, res){
    notes.addNotes(req.body)
    .then((data) => {
        res.json(data)
    })
})
router.delete("/notes/:id", function(req, res){
    notes.deletedNotes(req.params.id)
    .then(() => 
        res.json({ok: true}))
})
module.exports = router