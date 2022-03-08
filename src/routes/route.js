const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const middleware=require("../middleware/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users",middleware.userAuth, userController.createUser  )

router.post("/login",middleware.loginUserAuth, userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId",middleware.getUserAuth, userController.getUserData)

router.put("/users/:userId",middleware.updateAuth, userController.updateUser)

router.put("/DELETE/:userId"),middleware.deleteAuth, userController.deleteUser

module.exports = router;