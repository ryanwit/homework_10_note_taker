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
        return writeFileAsync("db/db.json", "utf8")
    }
}
