const fs = require("fs")
const util = require("util")
const writeFileAsync = util.promisify(fs.writeFile)
const readFileAsync = util.promisify(fs.readFile)
let id = 0

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
            let notes;

            try{
                notes = [].concat(JSON.parse(data))
            }

            catch(err) {
                notes = [];
            }

            return notes
        })
    }
    addNotes(data) {
        const {title, text} = data
        if(!title || !text) {
            throw new Error("Please enter a title and text below!")
        }
    
        const competedNote = {title, text, id:id++}

        return this.getNotes()
        .then(data => {
            return[...data,completedNote]
        }).then(data => {
            return this.writeNotes(data)
        }).then(() => {
            return completedNote
        })
    }

    deleteNotes(id) {
        return this.getNotes()
        .then(data => {
            return data.filter(notes => notes.id !== id)
        }).then(data => {
            return this.writeNotes(data)
        })
    }
}

module.exports = new Notes();

