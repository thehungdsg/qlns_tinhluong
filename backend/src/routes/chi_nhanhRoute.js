const express = require('express');
const router = express.Router();
const chiNhanhController = require('../controller/chi_nhanhController');

router.get('/', chiNhanhController.getAllChiNhanh);


module.exports = router;