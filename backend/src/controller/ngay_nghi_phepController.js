//tạo Routes, Models, Controllers cho chi nhánh
const ngayNghiPhepService = require("../services/ngay_nghi_phepService");

exports.getAllNgayNghiPhep = async (req, res) => {
    try {

        const danhSach = await ngayNghiPhepService.getAll();

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

        const ngayNghiPhep = await ngayNghiPhepService.getById(id);

        if (!ngayNghiPhep) {
            return res.status(404).json({
                success: false,
                message: 'Không tìm thấy ngày nghỉ phép'
            });
        }

        res.json({
            success: true,
            data: ngayNghiPhep   
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
        const result = await ngayNghiPhepService.create(data);

        res.status(201).json({
            success: true,
            message: 'Ngày nghỉ phép đã được tạo thành công',
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
        const result = await ngayNghiPhepService.update(id, data);

        if (result.affectedRows === 0) {
            return res.status(404).json({
                success: false,
                message: 'Không tìm thấy ngày nghỉ phép để cập nhật'
            });
        }
        res.json({
            success: true,
            message: 'Ngày nghỉ phép đã được cập nhật thành công',
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
        const result = await ngayNghiPhepService.delete(id);
        res.json({
            success: true,
            message: 'Ngày nghỉ phép đã được xóa thành công',
            data: result
        });
    } catch (error) {
        res.status(500).json({
            success: false,     
            message: error.message
        });
    }
};