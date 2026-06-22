const express = require('express');
const router = express.Router();
const khenThuongKyLuatController = require('../controller/khen_thuong_ky_luatController');


router.get("/khen-thuong-ky-luat", khenThuongKyLuatController.getAllKhenThuongKyLuat);
router.get("/khen-thuong-ky-luat/:id", khenThuongKyLuatController.getById);
router.post("/khen-thuong-ky-luat", khenThuongKyLuatController.create);
router.put("/khen-thuong-ky-luat/:id", khenThuongKyLuatController.update);
router.delete("/khen-thuong-ky-luat/:id", khenThuongKyLuatController.delete);


module.exports = router;