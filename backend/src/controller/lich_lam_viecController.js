
//tạo Routes, Models, Controllers cho lịch làm việc
const lichLamViecService = require("../services/lich_lam_viecService");

exports.getAllLichLamViec = async (req, res) => {
    try {

        const danhSach = await lichLamViecService.getAll();

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

        const lichLamViec = await lichLamViecService.getById(id);

        if (!lichLamViec) {
            return res.status(404).json({
                success: false,
                message: 'Không tìm thấy lịch làm việc'
            });
        }

        res.json({
            success: true,
            data: lichLamViec
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
        const result = await lichLamViecService.create(data);

        res.status(201).json({
            success: true,
            message: 'Lịch làm việc đã được tạo thành công',
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
        const result = await lichLamViecService.update(id, data);

        if (result.affectedRows === 0) {
            return res.status(404).json({
                success: false,
                message: 'Không tìm thấy lịch làm việc để cập nhật'
            });
        }
        res.json({
            success: true,
            message: 'Lịch làm việc đã được cập nhật thành công',
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
        const result = await lichLamViecService.delete(id);
        res.json({
            success: true,
            message: 'Lịch làm việc đã được xóa thành công',
            data: result
        });
    } catch (error) {
        res.status(500).json({
            success: false,     
            message: error.message
        });
    }
};