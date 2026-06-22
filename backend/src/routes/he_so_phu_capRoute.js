const express = require('express');
const router = express.Router();
const heSoPhuCapController = require('../controller/he_so_phu_capController');


router.get("/he-so-phu-cap", heSoPhuCapController.getAllHeSoPhuCap);
router.get("/he-so-phu-cap/:id", heSoPhuCapController.getById);
router.post("/he-so-phu-cap", heSoPhuCapController.create);
router.put("/he-so-phu-cap/:id", heSoPhuCapController.update);
router.delete("/he-so-phu-cap/:id", heSoPhuCapController.delete);


module.exports = router;