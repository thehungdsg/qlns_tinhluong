const express = require('express');
const router = express.Router();
const chamCongController = require('../controller/cham_congController');


router.get("/cham-cong", chamCongController.getAllChamCong);
router.get("/cham-cong/:id", chamCongController.getById);
router.post("/cham-cong", chamCongController.create);
router.put("/cham-cong/:id", chamCongController.update);
router.delete("/cham-cong/:id", chamCongController.delete);


module.exports = router;