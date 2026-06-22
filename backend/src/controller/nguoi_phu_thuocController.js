
const nguoiPhuThuocService = require("../services/nguoi_phu_thuocService");

exports.getAllNguoiPhuThuoc = async (req, res) => {
    try {

        const danhSach = await nguoiPhuThuocService.getAll();

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

        const nguoiPhuThuoc = await nguoiPhuThuocService.getById(id);

        if (!nguoiPhuThuoc) {
            return res.status(404).json({
                success: false,
                message: 'Không tìm thấy người phụ thuộc'
            });
        }

        res.json({
            success: true,
            data: nguoiPhuThuoc   
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
        const result = await nguoiPhuThuocService.create(data);

        res.status(201).json({
            success: true,
            message: 'Người phụ thuộc đã được tạo thành công',
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
        const result = await nguoiPhuThuocService.update(id, data);

        if (result.affectedRows === 0) {
            return res.status(404).json({
                success: false,
                message: 'Không tìm thấy người phụ thuộc để cập nhật'
            });
        }
        res.json({
            success: true,
            message: 'Người phụ thuộc đã được cập nhật thành công',
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
        const result = await nguoiPhuThuocService.delete(id);
        res.json({
            success: true,
            message: 'Người phụ thuộc đã được xóa thành công',
            data: result
        });
    } catch (error) {
        res.status(500).json({
            success: false,     
            message: error.message
        });
    }
};