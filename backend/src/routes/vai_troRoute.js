const express = require('express');
const router = express.Router();
const vaiTroController = require('../controller/vai_troController');


router.get("/vai-tro", vaiTroController.getAllVaiTro);
router.get("/vai-tro/:id", vaiTroController.getById);
router.post("/vai-tro", vaiTroController.create);
router.put("/vai-tro/:id", vaiTroController.update);
router.delete("/vai-tro/:id", vaiTroController.delete);


module.exports = router;