/* -------------------------------------------------------------------------- */
/*        class that holds all functions to interact with db.json file        */
/* -------------------------------------------------------------------------- */

const fs = require("fs")
const util = require("util")
const writeFileAsync = util.promisify(fs.writeFile)
const readFileAsync = util.promisify(fs.readFile)
const uuidv1 = require("uuidv1");

/* ------------------------ NOTES CLASS W/ FUNCTIONS ------------------------ */

class Notes {
    readNotes() {
        return readFileAsync("db/db.json", "utf8")
    }
    writeNotes(data) {
        return writeFileAsync("db/db.json", JSON.stringify(data))
    }
    getNotes(){
        return this.readNotes()
        .then(data => {
            console.log(data)
            let notes;
            try{
                notes = [].concat(JSON.parse(data))
            }
            catch(err) {
                notes = [];
            }
            return notes;
        })
    }
    addNotes(data) {
        const {title, text} = data
        if(!title || !text) {
            throw new Error("Please enter a title and text below!")
        }
        const completedNote = {title, text, id: uuidv1()}
        return this.getNotes()
        .then(data => {
            console.log(data)
            return[...data, completedNote]
        }).then(updatedNotes => {
            console.log(updatedNotes)
            return this.writeNotes(updatedNotes)
        }).then(() => {
            console.log(completedNote)
            return completedNote;
        })
    }
    deletedNotes(id) {
        return this.getNotes()
        .then((remove) => remove.filter((deletedNote) => deletedNote.id !== id))
        .then((filteredNotes) => this.writeNotes(filteredNotes));
    }
}
module.exports = new Notes();

