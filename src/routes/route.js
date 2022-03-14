const express = require('express');
const router = express.Router();
const authorController= require("../controllers/authorController")
const blogController= require("../controllers/blogController")
//const middleware = require ("../middleware/")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/authors",authorController.createAuthor)
router.post("/blogs",blogController.createBlog)
router.get("/blogs", blogController.getBlog)
router.put("/blogs/:blogId",blogController.updateBlog)
router.delete("/blogs/:blogId",blogController.deleteBlog)
router.delete("/blogs", blogController.queryParamsDelete)
module.exports=router
