//tạo Routes, Models, Controllers cho chi nhánh
const thangLuongService = require("../services/thang_luongService");

exports.getAllThangLuong = async (req, res) => {
    try {

        const danhSach = await thangLuongService.getAll();

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

        const thangLuong = await thangLuongService.getById(id);

        if (!thangLuong) {
            return res.status(404).json({
                success: false,
                message: 'Không tìm thấy tháng lương'
            });
        }

        res.json({
            success: true,
            data: thangLuong   
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
        const result = await thangLuongService.create(data);

        res.status(201).json({
            success: true,
            message: 'Tháng lương đã được tạo thành công',
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
        const result = await thangLuongService.update(id, data);

        if (result.affectedRows === 0) {
            return res.status(404).json({
                success: false,
                message: 'Không tìm thấy tháng lương để cập nhật'
            });
        }
        res.json({
            success: true,
            message: 'Tháng lương đã được cập nhật thành công',
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
        const result = await thangLuongService.delete(id);
        res.json({
            success: true,
            message: 'Tháng lương đã được xóa thành công',
            data: result
        });
    } catch (error) {
        res.status(500).json({
            success: false,     
            message: error.message
        });
    }
};