//tạo Routes, Models, Controllers cho phụ cấp
const phuCapService = require("../services/phu_capService");

exports.getAllPhuCap = async (req, res) => {
    try {

        const danhSach = await phuCapService.getAll();

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

        const phuCap = await phuCapService.getById(id);

        if (!phuCap) {
            return res.status(404).json({
                success: false,
                message: 'Không tìm thấy phụ cấp'
            });
        }

        res.json({
            success: true,
            data: phuCap
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
        const result = await phuCapService.create(data);

        res.status(201).json({
            success: true,
            message: 'Phụ cấp đã được tạo thành công',
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
        const result = await phuCapService.update(id, data);

        if (result.affectedRows === 0) {
            return res.status(404).json({
                success: false,
                message: 'Không tìm thấy phụ cấp để cập nhật'
            });
        }
        res.json({
            success: true,
            message: 'Phụ cấp đã được cập nhật thành công',
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
        const result = await phuCapService.delete(id);
        res.json({
            success: true,
            message: 'Phụ cấp đã được xóa thành công',
            data: result
        });
    } catch (error) {
        res.status(500).json({
            success: false,     
            message: error.message
        });
    }
};