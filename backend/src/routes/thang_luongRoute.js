const express = require('express');
const router = express.Router();
const thangLuongController = require('../controller/thang_luongController');


router.get("/thang-luong", thangLuongController.getAllThangLuong);
router.get("/thang-luong/:id", thangLuongController.getById);
router.post("/thang-luong", thangLuongController.create);
router.put("/thang-luong/:id", thangLuongController.update);
router.delete("/thang-luong/:id", thangLuongController.delete);


module.exports = router;