//  add in all paths required
const express = require("express");
const app = express();
const apiRoutes = require("./routes/apiroutes")
const htmlRoutes = require("./routes/htmlroutes")

// create PORT to use
const PORT = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public")); // server once you start it goes into public folder and looks for html file
app.use("/api", apiRoutes); 
app.use("/", htmlRoutes);
// Start the server on the port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));


// create a routes to use
// app.get("/notes", function(req, res){
//     res.sendFile(path.join(__direname, "./publ"))
// })

// Create function for getting all notes

//  Create function for saving a note

// Create function for deleting a note


