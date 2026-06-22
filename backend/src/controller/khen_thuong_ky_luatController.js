//tạo Routes, Models, Controllers cho khen thưởng/kỷ luật
const khenThuongKyLuatService = require("../services/khen_thuong_ky_luatService");

exports.getAllKhenThuongKyLuat = async (req, res) => {
    try {

        const danhSach = await khenThuongKyLuatService.getAll();

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

        const khenThuongKyLuat = await khenThuongKyLuatService.getById(id);

        if (!khenThuongKyLuat) {
            return res.status(404).json({
                success: false,
                message: 'Không tìm thấy khen thưởng/kỷ luật'
            });
        }

        res.json({
            success: true,
            data: khenThuongKyLuat
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
        const result = await khenThuongKyLuatService.create(data);

        res.status(201).json({
            success: true,
            message: 'Khen thưởng/kỷ luật đã được tạo thành công',
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
        const result = await khenThuongKyLuatService.update(id, data);

        if (result.affectedRows === 0) {
            return res.status(404).json({
                success: false,
                message: 'Không tìm thấy khen thưởng/kỷ luật để cập nhật'
            });
        }
        res.json({
            success: true,
            message: 'Khen thưởng/kỷ luật đã được cập nhật thành công',
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
        const result = await khenThuongKyLuatService.delete(id);
        res.json({
            success: true,
            message: 'Khen thưởng/kỷ luật đã được xóa thành công',
            data: result
        });
    } catch (error) {
        res.status(500).json({
            success: false,     
            message: error.message
        });
    }
};