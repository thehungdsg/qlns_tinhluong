//tạo Routes, Models, Controllers cho hệ số phụ cấp
const heSoPhuCapService = require("../services/he_so_phu_capService");

exports.getAllHeSoPhuCap = async (req, res) => {
    try {

        const danhSach = await heSoPhuCapService.getAll();

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

        const heSoPhuCap = await heSoPhuCapService.getById(id);

        if (!heSoPhuCap) {
            return res.status(404).json({
                success: false,
                message: 'Không tìm thấy hệ số phụ cấp'
            });
        }

        res.json({
            success: true,
            data: heSoPhuCap
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
        const result = await heSoPhuCapService.create(data);

        res.status(201).json({
            success: true,
            message: 'Hệ số phụ cấp đã được tạo thành công',
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
        const result = await heSoPhuCapService.update(id, data);

        if (result.affectedRows === 0) {
            return res.status(404).json({
                success: false,
                message: 'Không tìm thấy hệ số phụ cấp để cập nhật'
            });
        }
        res.json({
            success: true,
            message: 'Hệ số phụ cấp đã được cập nhật thành công',
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
        const result = await heSoPhuCapService.delete(id);
        res.json({
            success: true,
            message: 'Hệ số phụ cấp đã được xóa thành công',
            data: result
        });
    } catch (error) {
        res.status(500).json({
            success: false,     
            message: error.message
        });
    }
};