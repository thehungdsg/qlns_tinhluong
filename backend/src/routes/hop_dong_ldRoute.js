const express = require('express');
const router = express.Router();
const hopDongLdController = require('../controller/hop_dong_ldController');


router.get("/hop-dong-ld", hopDongLdController.getAllHopDongLd);
router.get("/hop-dong-ld/:id", hopDongLdController.getById);
router.post("/hop-dong-ld", hopDongLdController.create);
router.put("/hop-dong-ld/:id", hopDongLdController.update);
router.delete("/hop-dong-ld/:id", hopDongLdController.delete);


module.exports = router;