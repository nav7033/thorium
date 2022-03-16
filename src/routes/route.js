const express = require('express');
const router = express.Router();
const authorController = require("../controllers/authorController")
const blogController = require("../controllers/blogController")
const {authorAuth,authorAuthorization,getAuth} = require("../middleware/auth")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/authors", authorController.createAuthor)

router.post("/blogs",authorAuth,getAuth,  blogController.createBlog)

router.get("/blogs",authorAuth,getAuth, blogController.getBlog)

router.put("/blogs/:blogId",authorAuth,authorAuthorization, blogController.updateBlog)
router.delete("/blogs/:blogId",authorAuth,authorAuthorization, blogController.deleteBlog)
router.delete("/blogs",authorAuth,authorAuthorization, blogController.queryParamsDelete)

//phase02
router.post("/login", authorController.loginAuthor)




module.exports = router
