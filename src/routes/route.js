const express = require('express');
const router = express.Router();
const authorController = require("../controllers/authorController")
const blogController = require("../controllers/blogController")
const middleware = require("../middleware/auth")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/authors", authorController.createAuthor)

router.post("/blogs", middleware.authorAuth, middleware.getAuthrize, blogController.createBlog)

router.get("/blogs", middleware.authorAuth, middleware.getAuthrize, blogController.getBlog)

router.put("/blogs/:blogId", middleware.authorAuth, middleware.authorAuthorization, blogController.updateBlog)
router.delete("/blogs/:blogId", middleware.authorAuth, middleware.authorAuthorization, blogController.deleteBlog)
router.delete("/blogs", middleware.authorAuth,blogController.queryParamsDelete)

//phase02
router.post("/login", authorController.loginAuthor)




module.exports = router
