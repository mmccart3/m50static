const express = require("express");
// This imports the express library
const app = express();
// This renames express to app as per conventional useage
const port = 5001;
// allows us to decide what port number to assign



// app.use("/public", express.static("public"))
// express.static("public") setups a static webserver pulling files from the public folder
// app.use creates a route so that when we type in localhost:5001/public it follows this route

app.listen(port, () => console.log(`Server is listening on port ${port}`))
// This is the listener function which only listens into http request on port 5001, the anonomous 
// function runs just once when the listener is setup