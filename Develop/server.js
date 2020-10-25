/* ------------------------ add in all paths required ----------------------- */
const express = require("express");
const apiRoutes = require("./routes/apiroutes")
const htmlRoutes = require("./routes/htmlroutes")

/* --------------------------- create PORT to use --------------------------- */
const app = express();
const PORT = process.env.PORT || 3000;

/* ------------------------------ middle layer ------------------------------ */
app.use(express.urlencoded({ extended: true })); // allows easy access to info from the front end to the back end
app.use(express.json()); // giving access to req.body
app.use(express.static("public")); // server once you start it goes into public folder first and looks for index.html file
app.use("/api", apiRoutes); 
app.use("/", htmlRoutes); 

/* -------------------------------- listener -------------------------------- */
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));




