const express = require('express');
const router = express.Router();
const nguoiPhuThuocController = require('../controller/nguoi_phu_thuocController');


router.get("/nguoi-phu-thuoc", nguoiPhuThuocController.getAllNguoiPhuThuoc);
router.get("/nguoi-phu-thuoc/:id", nguoiPhuThuocController.getById);
router.post("/nguoi-phu-thuoc", nguoiPhuThuocController.create);
router.put("/nguoi-phu-thuoc/:id", nguoiPhuThuocController.update);
router.delete("/nguoi-phu-thuoc/:id", nguoiPhuThuocController.delete);


module.exports = router;