//tạo Routes, Models, Controllers cho chi nhánh
const vaiTroService = require("../services/vai_troService");

exports.getAllVaiTro = async (req, res) => {
    try {

        const danhSach = await vaiTroService.getAll();

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

        const vaiTro = await vaiTroService.getById(id);

        if (!vaiTro) {
            return res.status(404).json({
                success: false,
                message: 'Không tìm thấy vai trò'
            });
        }

        res.json({
            success: true,
            data: vaiTro
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
        const result = await vaiTroService.create(data);

        res.status(201).json({
            success: true,
            message: 'Vai trò đã được tạo thành công',
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
        const result = await vaiTroService.update(id, data);

        if (result.affectedRows === 0) {
            return res.status(404).json({
                success: false,
                message: 'Không tìm thấy vai trò để cập nhật'
            });
        }
        res.json({
            success: true,
            message: 'Vai trò đã được cập nhật thành công',
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
        const result = await vaiTroService.delete(id);
        res.json({
            success: true,
            message: 'Vai trò đã được xóa thành công',
            data: result
        });
    } catch (error) {
        res.status(500).json({
            success: false,     
            message: error.message
        });
    }
};