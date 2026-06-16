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