//tạo Routes, Models, Controllers cho bảng lương
const bangLuongService = require("../services/bang_luongService");

exports.getAllBangLuong = async (req, res) => {
    try {

        const danhSach = await bangLuongService.getAll();

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

        const bangLuong = await bangLuongService.getById(id);

        if (!bangLuong) {
            return res.status(404).json({
                success: false,
                message: 'Không tìm thấy bảng lương'
            });
        }

        res.json({
            success: true,
            data: bangLuong
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
        const result = await bangLuongService.create(data);

        res.status(201).json({
            success: true,
            message: 'Bảng lương đã được tạo thành công',
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
        const result = await bangLuongService.update(id, data);

        if (result.affectedRows === 0) {
            return res.status(404).json({
                success: false,
                message: 'Không tìm thấy bảng lương để cập nhật'
            });
        }
        res.json({
            success: true,
            message: 'Bảng lương đã được cập nhật thành công',
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
        const result = await bangLuongService.delete(id);
        res.json({
            success: true,
            message: 'Bảng lương đã được xóa thành công',
            data: result
        });
    } catch (error) {
        res.status(500).json({
            success: false,     
            message: error.message
        });
    }
};