const express = require('express');
const router = express.Router();
const nghiThaiSanController = require('../controller/nghi_thai_sanController');


router.get("/nghi-thai-san", nghiThaiSanController.getAllNghiThaiSan);
router.get("/nghi-thai-san/:id", nghiThaiSanController.getById);
router.post("/nghi-thai-san", nghiThaiSanController.create);
router.put("/nghi-thai-san/:id", nghiThaiSanController.update);
router.delete("/nghi-thai-san/:id", nghiThaiSanController.delete);


module.exports = router;