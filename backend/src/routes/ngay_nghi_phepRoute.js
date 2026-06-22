const express = require('express');
const router = express.Router();
const ngayNghiPhepController = require('../controller/ngay_nghi_phepController');


router.get("/ngay-nghi-phep", ngayNghiPhepController.getAllNgayNghiPhep);
router.get("/ngay-nghi-phep/:id", ngayNghiPhepController.getById);
router.post("/ngay-nghi-phep", ngayNghiPhepController.create);
router.put("/ngay-nghi-phep/:id", ngayNghiPhepController.update);
router.delete("/ngay-nghi-phep/:id", ngayNghiPhepController.delete);


module.exports = router;