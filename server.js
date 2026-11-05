
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const books = [
    {
        _id: 1,
        title: "The Seven Husbands of Evelyn Hugo",
        author: "Taylor Jenkins Reid",
        genre: "Historical Fiction",
        rating: 5,
        pages: 400,
        img_name: "evelyn-hugo.jpg"
    },
    {
        _id: 2,
        title: "The Hawthorne Legacy",
        author: "Jennifer Lynn Barnes",
        genre: "Mystery",
        rating: 5,
        pages: 358,
        img_name: "hawthorne-legacy.jpg"
    },
    {
        _id: 3,
        title: "Love & Olives",
        author: "Jenna Evans Welch",
        genre: "Romance",
        rating: 5,
        pages: 512,
        img_name: "love-olives.jpg"
    },
    {
        _id: 4,
        title: "People We Meet on Vacation",
        author: "Emily Henry",
        genre: "Romance",
        rating: 5,
        pages: 364,
        img_name: "people-vacation.jpg"
    },
    {
        _id: 5,
        title: "Heart Bones",
        author: "Colleen Hoover",
        genre: "Romance",
        rating: 5,
        pages: 336,
        img_name: "heart-bones.jpg"
    },
    {
        _id: 6,
        title: "The Summer of Broken Rules",
        author: "K. L. Walther",
        genre: "Romance",
        rating: 5,
        pages: 384,
        img_name: "summer-broken-rules.jpg"
    },
    {
        _id: 7,
        title: "The Messy Lives of Book People",
        author: "Phaedra Patrick",
        genre: "Contemporary Fiction",
        rating: 5,
        pages: 352,
        img_name: "messy-lives.jpg"
    },
    {
        _id: 8,
        title: "The Graham Effect",
        author: "Elle Kennedy",
        genre: "Romance",
        rating: 5,
        pages: 496,
        img_name: "graham-effect.jpg"
    },
    {
        _id: 9,
        title: "The Personal Librarian",
        author: "Marie Benedict & Victoria Christopher Murray",
        genre: "Historical Fiction",
        rating: 5,
        pages: 352,
        img_name: "personal-librarian.jpg"
    },
    {
        _id: 10,
        title: "The Seven Year Slip",
        author: "Ashley Poston",
        genre: "Romance",
        rating: 5,
        pages: 352,
        img_name: "seven-year-slip.jpg"
    },
    {
        _id: 11,
        title: "Everything I Know About Love",
        author: "Dolly Alderton",
        genre: "Memoir",
        rating: 5,
        pages: 368,
        img_name: "everything-love.jpg"
    },
    {
        _id: 12,
        title: "Welcome to Beach Town",
        author: "Susan Wiggs",
        genre: "Contemporary Fiction",
        rating: 5,
        pages: 368,
        img_name: "beach-town.jpg"
    }
];

// Get all books
app.get("/api/books", (req, res) => {
    res.json(books);
});

// Get one book by ID
app.get("/api/books/:id", (req, res) => {
    const book = books.find(
        (item) => item._id === Number(req.params.id)
    );

    if (!book) {
        return res.status(404).json({
            error: "Book not found"
        });
    }

    res.json(book);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Dog-Eared server running on port ${PORT}`);
});
