//tạo Routes, Models, Controllers cho chi nhánh
const caLamService = require("../services/ca_lamService");

exports.getAllCaLam = async (req, res) => {
    try {

        const danhSach = await caLamService.getAll();

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

        const caLam = await caLamService.getById(id);

        if (!caLam) {
            return res.status(404).json({
                success: false,
                message: 'Không tìm thấy ca làm'
            });
        }

        res.json({
            success: true,
            data: caLam
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
        const result = await caLamService.create(data);

        res.status(201).json({
            success: true,
            message: 'Ca làm đã được tạo thành công',
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
        const result = await caLamService.update(id, data);

        if (result.affectedRows === 0) {
            return res.status(404).json({
                success: false,
                message: 'Không tìm thấy ca làm để cập nhật'
            });
        }
        res.json({
            success: true,
            message: 'Ca làm đã được cập nhật thành công',
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
        const result = await caLamService.delete(id);
        res.json({
            success: true,
            message: 'Ca làm đã được xóa thành công',
            data: result
        });
    } catch (error) {
        res.status(500).json({
            success: false,     
            message: error.message
        });
    }
};