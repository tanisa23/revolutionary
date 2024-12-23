const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// In-memory array to store books
let books = [];

// Endpoint to add a book
app.post('/books', (req, res) => {
    const book = req.body;
    books.push(book);
    res.status(201).json({ message: 'Book added successfully', book });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
