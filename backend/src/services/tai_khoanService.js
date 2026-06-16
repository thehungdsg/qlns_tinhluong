const taiKhoanModel = require('../models/tai_khoanModel');

exports.getAll = async () => {
    try {
        const danhSach = await taiKhoanModel.findAll();
        return danhSach;
    } catch (error) {
        throw error;
    }
};
// Lấy tài khoản theo ID
exports.getById = async (id) => {
    try {

        const taiKhoan = await taiKhoanModel.findById(id);

        return taiKhoan;

    } catch (error) {
        throw error;
    }
};

// Thêm tài khoản
exports.create = async (data) => {
    try {

        const result = await taiKhoanModel.create(data);

        return result;

    } catch (error) {
        throw error;
    }
};

// Cập nhật tài khoản
exports.update = async (id, data) => {
    try {

        const result = await taiKhoanModel.update(id, data);

        return result;

    } catch (error) {
        throw error;
    }
};

// Xóa tài khoản
exports.delete = async (id) => {
    try {

        const result = await taiKhoanModel.delete(id);

        return result;

    } catch (error) {
        throw error;
    }
};
