const express = require('express');
const router = express.Router();
const lichSuTangLuongController = require('../controller/lich_su_tang_luongController');


router.get("/lich-su-tang-luong", lichSuTangLuongController.getAllLichSuTangLuong);
router.get("/lich-su-tang-luong/:id", lichSuTangLuongController.getById);
router.post("/lich-su-tang-luong", lichSuTangLuongController.create);
router.put("/lich-su-tang-luong/:id", lichSuTangLuongController.update);
router.delete("/lich-su-tang-luong/:id", lichSuTangLuongController.delete);


module.exports = router;