//tạo Routes, Models, Controllers cho chi nhánh
const hopDongLdService = require("../services/hop_dong_ldService");

exports.getAllHopDongLd = async (req, res) => {
    try {

        const danhSach = await hopDongLdService.getAll();

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

        const hopDongLd = await hopDongLdService.getById(id);

        if (!hopDongLd) {
            return res.status(404).json({
                success: false,
                message: 'Không tìm thấy hợp đồng lao động'
            });
        }

        res.json({
            success: true,
            data: hopDongLd
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
        const result = await hopDongLdService.create(data);

        res.status(201).json({
            success: true,
            message: 'Hợp đồng lao động đã được tạo thành công',
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
        const result = await hopDongLdService.update(id, data);

        if (result.affectedRows === 0) {
            return res.status(404).json({
                success: false,
                message: 'Không tìm thấy hợp đồng lao động để cập nhật'
            });
        }
        res.json({
            success: true,
            message: 'Hợp đồng lao động đã được cập nhật thành công',
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
        const result = await hopDongLdService.delete(id);
        res.json({
            success: true,
            message: 'Hợp đồng lao động đã được xóa thành công',
            data: result
        });
    } catch (error) {
        res.status(500).json({
            success: false,     
            message: error.message
        });
    }
};