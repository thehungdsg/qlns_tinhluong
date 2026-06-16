const express = require('express');
const router = express.Router();
const taiKhoanController = require('../controller/tai_khoanController');

router.get('/tai-khoan', taiKhoanController.getAllTaiKhoan);
router.get('/tai-khoan/:id', taiKhoanController.getById);

router.post('/tai-khoan', taiKhoanController.create);

router.put('/tai-khoan/:id', taiKhoanController.update);

router.delete('/tai-khoan/:id', taiKhoanController.delete);


module.exports = router;