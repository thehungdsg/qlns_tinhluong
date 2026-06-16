const express = require('express');
const router = express.Router();
const chiNhanhController = require('../controller/chi_nhanhController');


router.get("/chi-nhanh", chiNhanhController.getAllChiNhanh);
router.get("/chi-nhanh/:id", chiNhanhController.getById);
router.post("/chi-nhanh", chiNhanhController.create);
router.put("/chi-nhanh/:id", chiNhanhController.update);
router.delete("/chi-nhanh/:id", chiNhanhController.delete);


module.exports = router;