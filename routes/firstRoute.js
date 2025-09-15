const express = require('express');
const router = express.Router();
const firstRouteController = require("../controllers/firstController");

// Define the routes for this router
router.get('/', firstRouteController);

module.exports = router;