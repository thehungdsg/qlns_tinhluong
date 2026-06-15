//tạo Routes, Models, Controllers cho chi nhánh
const chiNhanhService = require("../services/chi_nhanhService");

exports.getAllChiNhanh = async (req, res) => {
    try {

        const danhSach = await chiNhanhService.getAll();

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

        const chiNhanh = await chiNhanhService.getById(id);

        if (!chiNhanh) {
            return res.status(404).json({
                success: false,
                message: 'Không tìm thấy chi nhánh'
            });
        }

        res.json({
            success: true,
            data: chiNhanh
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
        const result = await chiNhanhService.create(data);

        res.status(201).json({
            success: true,
            message: 'Chi nhánh đã được tạo thành công',
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
        const result = await chiNhanhService.update(id, data);

        if (result.affectedRows === 0) {
            return res.status(404).json({
                success: false,
                message: 'Không tìm thấy chi nhánh để cập nhật'
            });
        }
        res.json({
            success: true,
            message: 'Chi nhánh đã được cập nhật thành công',
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
        const result = await chiNhanhService.delete(id);
        res.json({
            success: true,
            message: 'Chi nhánh đã được xóa thành công',
            data: result
        });
    } catch (error) {
        res.status(500).json({
            success: false,     
            message: error.message
        });
    }
};