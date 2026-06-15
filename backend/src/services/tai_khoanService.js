const taiKhoanModel = require('../models/tai_khoanModel');

exports.getAll = async () => {
    try {
        const danhSach = await taiKhoanModel.findAll();
        return danhSach;
    } catch (error) {
        throw error;
    }
};