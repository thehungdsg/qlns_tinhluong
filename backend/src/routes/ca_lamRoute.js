const express = require('express');
const router = express.Router();
const caLamController = require('../controller/ca_lamController');


router.get("/ca-lam", caLamController.getAllCaLam);
router.get("/ca-lam/:id", caLamController.getById);
router.post("/ca-lam", caLamController.create);
router.put("/ca-lam/:id", caLamController.update);
router.delete("/ca-lam/:id", caLamController.delete);


module.exports = router;