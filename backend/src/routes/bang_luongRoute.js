const express = require('express');
const router = express.Router();
const bangLuongController = require('../controller/bang_luongController');


router.get("/bang-luong", bangLuongController.getAllBangLuong);
router.get("/bang-luong/:id", bangLuongController.getById);
router.post("/bang-luong", bangLuongController.create);
router.put("/bang-luong/:id", bangLuongController.update);
router.delete("/bang-luong/:id", bangLuongController.delete);


module.exports = router;