const express = require('express');
const router = express.Router();
const chiTietBangLuongController = require('../controller/chi_tiet_bang_luongController');


router.get("/chi-tiet-bang-luong", chiTietBangLuongController.getAllChiTietBangLuong);
router.get("/chi-tiet-bang-luong/:id", chiTietBangLuongController.getById);
router.post("/chi-tiet-bang-luong", chiTietBangLuongController.create);
router.put("/chi-tiet-bang-luong/:id", chiTietBangLuongController.update);
router.delete("/chi-tiet-bang-luong/:id", chiTietBangLuongController.delete);


module.exports = router;