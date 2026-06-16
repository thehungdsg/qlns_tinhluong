const taiKhoanService = require('../services/tai_khoanService');

exports.getAllTaiKhoan = async (req, res) => {
    try {   
        const danhSach = await taiKhoanService.getAll();
        
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

// Lấy tài khoản theo ID
exports.getById = async (req, res) => {
    try {

        const { id } = req.params;

        const taiKhoan = await taiKhoanService.getById(id);

        if (!taiKhoan) {
            return res.status(404).json({
                success: false,
                message: 'Không tìm thấy tài khoản'
            });
        }

        return res.status(200).json({
            success: true,
            data: taiKhoan
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

// Thêm tài khoản
exports.create = async (req, res) => {
    try {

        const data = req.body;

        const result = await taiKhoanService.create(data);

        return res.status(201).json({
            success: true,
            message: 'Tạo tài khoản thành công',
            data: result
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

// Cập nhật tài khoản
exports.update = async (req, res) => {
    try {

        const { id } = req.params;

        const data = req.body;

        const result = await taiKhoanService.update(id, data);

        if (result.affectedRows === 0) {
            return res.status(404).json({
                success: false,
                message: 'Không tìm thấy tài khoản'
            });
        }

        return res.status(200).json({
            success: true,
            message: 'Cập nhật tài khoản thành công',
            data: result
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

// Xóa tài khoản
exports.delete = async (req, res) => {
    try {

        const { id } = req.params;

        const result = await taiKhoanService.delete(id);

        if (result.affectedRows === 0) {
            return res.status(404).json({
                success: false,
                message: 'Không tìm thấy tài khoản'
            });
        }

        return res.status(200).json({
            success: true,
            message: 'Xóa tài khoản thành công',
            data: result
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }
};