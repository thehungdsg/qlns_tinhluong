const express = require('express');
const router = express.Router();
const taiKhoanController = require('../controller/tai_khoanController');

router.get('/tai-khoan', taiKhoanController.getAllTaiKhoan);


module.exports = router;