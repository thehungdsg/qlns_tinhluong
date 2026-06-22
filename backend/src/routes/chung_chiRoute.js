const express = require('express');
const router = express.Router();
const chungChiController = require('../controller/chung_chiController');


router.get("/chung-chi", chungChiController.getAllChungChi);
router.get("/chung-chi/:id", chungChiController.getById);
router.post("/chung-chi", chungChiController.create);
router.put("/chung-chi/:id", chungChiController.update);
router.delete("/chung-chi/:id", chungChiController.delete);


module.exports = router;