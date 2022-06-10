const express = require("express")
const router = express.Router()
const userCtrl = require("../controllers/user")
const multer = require("../middleware/multer-config")

router.get("/:id", userCtrl.findOneUser)


module.exports = router