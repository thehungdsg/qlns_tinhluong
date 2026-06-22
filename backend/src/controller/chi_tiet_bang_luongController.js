//tạo Routes, Models, Controllers cho chi tiết bảng lương
const chiTietBangLuongService = require("../services/chi_tiet_bang_luongService");

exports.getAllChiTietBangLuong = async (req, res) => {
    try {

        const danhSach = await chiTietBangLuongService.getAll();

        return res.status(200).json({
            success: true,
            total: danhSach.length,
            data: danhSach
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

//get by id
exports.getById = async (req, res) => {
    try {

        const { id } = req.params;

        const chiTietBangLuong = await chiTietBangLuongService.getById(id);

        if (!chiTietBangLuong) {
            return res.status(404).json({
                success: false,
                message: 'Không tìm thấy chi tiết bảng lương'
            });
        }

        res.json({
            success: true,
            data: chiTietBangLuong
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

exports.create = async (req, res) => {
    try {
        const data = req.body;
        const result = await chiTietBangLuongService.create(data);

        res.status(201).json({
            success: true,
            message: 'Chi tiết bảng lương đã được tạo thành công',
            data: result
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

exports.update = async (req, res) => {
    try {

        const { id } = req.params;
        const data = req.body;  
        const result = await chiTietBangLuongService.update(id, data);

        if (result.affectedRows === 0) {
            return res.status(404).json({
                success: false,
                message: 'Không tìm thấy chi tiết bảng lương để cập nhật'
            });
        }
        res.json({
            success: true,
            message: 'Chi tiết bảng lương đã được cập nhật thành công',
            data: result
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

exports.delete = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await chiTietBangLuongService.delete(id);
        res.json({
            success: true,
            message: 'Chi tiết bảng lương đã được xóa thành công',
            data: result
        });
    } catch (error) {
        res.status(500).json({
            success: false,     
            message: error.message
        });
    }
};