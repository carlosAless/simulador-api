const express = require('express')

const homeController = require('../controller/homeController')

const router = express.Router()

router.get("/", homeController.getPage);



module.exports = router;
