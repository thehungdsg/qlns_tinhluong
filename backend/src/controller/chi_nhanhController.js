//tạo Routes, Models, Controllers cho chi nhánh
const chiNhanhService = require("../services/chi_nhanhService");

exports.getAllChiNhanh = async (req, res) => {
    try {

        const danhSach = await chiNhanhService.getAll();

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
