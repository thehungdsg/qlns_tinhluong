//tạo Routes, Models, Controllers cho chấm công
const chamCongService = require("../services/cham_congService");

exports.getAllChamCong = async (req, res) => {
    try {

        const danhSach = await chamCongService.getAll();

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

        const chamCong = await chamCongService.getById(id);

        if (!chamCong) {
            return res.status(404).json({
                success: false,
                message: 'Không tìm thấy chấm công'
            });
        }

        res.json({
            success: true,
            data: chamCong
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
        const result = await chamCongService.create(data);

        res.status(201).json({
            success: true,
            message: 'Chấm công đã được tạo thành công',
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
        const result = await chamCongService.update(id, data);

        if (result.affectedRows === 0) {
            return res.status(404).json({
                success: false,
                message: 'Không tìm thấy chấm công để cập nhật'
            });
        }
        res.json({
            success: true,
            message: 'Chấm công đã được cập nhật thành công',
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
        const result = await chamCongService.delete(id);
        res.json({
            success: true,
            message: 'Chấm công đã được xóa thành công',
            data: result
        });
    } catch (error) {
        res.status(500).json({
            success: false,     
            message: error.message
        });
    }
};