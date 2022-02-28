const express = require('express');
const router = express.Router();

const BookController= require("../controller/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createBook", BookController.createBook  )

router.get("/bookList", BookController.bookList)

router.get("/getBookInYear", BookController.getBookInYear)

router.get("/getParticularBook", BookController.getParticularBook)

router.get("/getXINRBooks", BookController.getXINRBooks)

router.get("/getRandomBook", BookController.getRandomBook)

module.exports = router;
