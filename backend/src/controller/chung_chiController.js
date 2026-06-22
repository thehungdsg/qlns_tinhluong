//tạo Routes, Models, Controllers cho chứng chỉ
const chungChiService = require("../services/chung_chiService");

exports.getAllChungChi = async (req, res) => {
    try {

        const danhSach = await chungChiService.getAll();

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

        const chungChi = await chungChiService.getById(id);

        if (!chungChi) {
            return res.status(404).json({
                success: false,
                message: 'Không tìm thấy chứng chỉ'
            });
        }

        res.json({
            success: true,
            data: chungChi
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
        const result = await chungChiService.create(data);

        res.status(201).json({
            success: true,
            message: 'Chứng chỉ đã được tạo thành công',
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
        const result = await chungChiService.update(id, data);

        if (result.affectedRows === 0) {
            return res.status(404).json({
                success: false,
                message: 'Không tìm thấy chứng chỉ để cập nhật'
            });
        }
        res.json({
            success: true,
            message: 'Chứng chỉ đã được cập nhật thành công',
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
        const result = await chungChiService.delete(id);
        res.json({
            success: true,
            message: 'Chứng chỉ đã được xóa thành công',
            data: result
        });
    } catch (error) {
        res.status(500).json({
            success: false,     
            message: error.message
        });
    }
};