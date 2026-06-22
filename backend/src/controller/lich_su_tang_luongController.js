//tạo Routes, Models, Controllers cho chi nhánh
const lichSuTangLuongService = require("../services/lich_su_tang_luongService");

exports.getAllLichSuTangLuong = async (req, res) => {
    try {

        const danhSach = await lichSuTangLuongService.getAll();

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

        const lichSuTangLuong = await lichSuTangLuongService.getById(id);

        if (!lichSuTangLuong) {
            return res.status(404).json({
                success: false,
                message: 'Không tìm thấy lịch sử tăng lương'
            });
        }

        res.json({
            success: true,
            data: lichSuTangLuong   
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
        const result = await lichSuTangLuongService.create(data);

        res.status(201).json({
            success: true,
            message: 'Lịch sử tăng lương đã được tạo thành công',
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
        const result = await lichSuTangLuongService.update(id, data);

        if (result.affectedRows === 0) {
            return res.status(404).json({
                success: false,
                message: 'Không tìm thấy lịch sử tăng lương để cập nhật'
            });
        }
        res.json({
            success: true,
            message: 'Lịch sử tăng lương đã được cập nhật thành công',
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
        const result = await lichSuTangLuongService.delete(id);
        res.json({
            success: true,
            message: 'Lịch sử tăng lương đã được xóa thành công',
            data: result
        });
    } catch (error) {
        res.status(500).json({
            success: false,     
            message: error.message
        });
    }
};