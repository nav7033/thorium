const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")
const authorcontroller= require("../controllers/authorcontroller")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)

router.post("/createBook", BookController.createBook )

//router.get("/getBooksData", BookController.getBooksData)

router.post("/createAuthor", authorcontroller.createAuthor)
router.get("/getAuthorData", authorcontroller.getAuthorData)
router.get("/updatePrice", authorcontroller.updatePrice)
router.get("/authorBookPrices", BookController.authorBookPrices)




module.exports = router;