//tạo Routes, Models, Controllers cho chi nhánh
const nghiThaiSanService = require("../services/nghi_thai_sanService");

exports.getAllNghiThaiSan = async (req, res) => {
    try {

        const danhSach = await nghiThaiSanService.getAll();

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

        const nghiThaiSan = await nghiThaiSanService.getById(id);

        if (!nghiThaiSan) {
            return res.status(404).json({
                success: false,
                message: 'Không tìm thấy ngày nghỉ thai sản'
            });
        }

        res.json({
            success: true,
            data: nghiThaiSan      
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
        const result = await nghiThaiSanService.create(data);

        res.status(201).json({
            success: true,
            message: 'Ngày nghỉ thai sản đã được tạo thành công',
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
        const result = await nghiThaiSanService.update(id, data);

        if (result.affectedRows === 0) {
            return res.status(404).json({
                success: false,
                message: 'Không tìm thấy ngày nghỉ thai sản để cập nhật'
            });
        }
        res.json({
            success: true,
            message: 'Ngày nghỉ thai sản đã được cập nhật thành công',
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
        const result = await nghiThaiSanService.delete(id);
        res.json({
            success: true,
            message: 'Ngày nghỉ thai sản đã được xóa thành công',
            data: result
        });
    } catch (error) {
        res.status(500).json({
            success: false,     
            message: error.message
        });
    }
};