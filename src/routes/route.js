const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const publisherController=require("../controllers/publisherController")
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", authorController.createAuthor  )

router.get("/getAuthorsData", authorController.getAuthorsData)

router.post("/createBook", bookController.createBook  )

router.post("/createBook1",bookController.createBook1)

router.post("/createPublisher", publisherController.createPublisher)

router.get("/getBooksData", bookController.getBooksData)

router.get("/getBooksWithAuthorPublisherDetails", bookController.getBooksWithAuthorPublisherDetails)

router.put("/updatedData",bookController.updatedData)

router.put("/increasePrice",bookController.increasePrice)

module.exports = router;