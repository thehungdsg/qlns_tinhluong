const express = require('express');
const router = express.Router();
const lichLamViecController = require('../controller/lich_lam_viecController');


router.get("/lich-lam-viec", lichLamViecController.getAllLichLamViec);
router.get("/lich-lam-viec/:id", lichLamViecController.getById);
router.post("/lich-lam-viec", lichLamViecController.create);
router.put("/lich-lam-viec/:id", lichLamViecController.update);
router.delete("/lich-lam-viec/:id", lichLamViecController.delete);


module.exports = router;