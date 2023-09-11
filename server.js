require("dotenv").config();
require("./db/connection")
const { default: mongoose } = require("mongoose");
const Book = require("./models/books");

const express = require("express");
// This imports the express library
const app = express();
// This renames express to app as per conventional useage
const port = process.env.PORT;
// allows us to decide what port number to assign

app.use(express.json())

app.post("/books/addabook", async(request, response) => {
    console.log("request body is:", request.body)

    const newBook = await Book.create(
        {
            title: request.body.title,
            author: request.body.author,
            genre: request.body.genre
        }
    )
    const successResponse = {
        message: "book added succesfully",
        book: newBook
    }

    response.status(201).json(successResponse);
})


app.get("/books/listallbooks", async(request, response) =>{
const allBooks = await Book.find({});
console.log("All Books on this database are:", allBooks);

const successResponse = {
    message: "succesfully read",
    books: allBooks
};

response.status(218).json(successResponse);
})

// app.use("/public", express.static("public"))
// express.static("public") setups a static webserver pulling files from the public folder
// app.use creates a route so that when we type in localhost:5001/public it follows this route

app.listen(port, () => console.log(`Server is listening on port ${port}`))
// This is the listener function which only listens into http request on port 5001, the anonomous 
// function runs just once when the listener is setup