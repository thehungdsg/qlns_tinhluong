const express = require('express');
const router = express.Router();
const phuCapController = require('../controller/phu_capController');


router.get("/phu-cap", phuCapController.getAllPhuCap);
router.get("/phu-cap/:id", phuCapController.getById);
router.post("/phu-cap", phuCapController.create);
router.put("/phu-cap/:id", phuCapController.update);
router.delete("/phu-cap/:id", phuCapController.delete);


module.exports = router;