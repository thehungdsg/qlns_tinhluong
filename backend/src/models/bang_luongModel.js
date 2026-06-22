const db = require("../config/database");

exports.findAll = async () => {

    const [rows] = await db.execute(`
        SELECT *
        FROM bang_luong
        ORDER BY MaBangLuong DESC
    `);

    return rows;
};

exports.findById = async (id) => {

    const [rows] = await db.execute(
        `
        SELECT *
        FROM bang_luong
        WHERE MaBangLuong = ?
        `,
        [id]
    );

    return rows[0];
};

/**
 * Thêm bảng lương
 */
exports.create = async (data) => {

    const [result] = await db.execute(
        `
        INSERT INTO bang_luong
        (
            LuongThang,
            TongPhuCap,
            TongThuong,
            TongPhat,
            TongGioLamViec,
            SoNguoiPhuThuoc,
            TongLuong,
            ThuNhapTruocThue,
            ThuNhapChiuThue,
            MucGiamTruGiaCanh,
            ThuePhaiDong,
            NgayTao,
            NgayThanhToan,
            LuongThucNhan,
            KyLuong,
            MaTK
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `,
        [
            data.LuongThang,
            data.TongPhuCap,
            data.TongThuong,
            data.TongPhat,
            data.TongGioLamViec,
            data.SoNguoiPhuThuoc,
            data.TongLuong,
            data.ThuNhapTruocThue,
            data.ThuNhapChiuThue,
            data.MucGiamTruGiaCanh,
            data.ThuePhaiDong,
            data.NgayTao,
            data.NgayThanhToan,
            data.LuongThucNhan,
            data.KyLuong,
            data.MaTK
        ]
    );

    return {
        insertId: result.insertId,
        affectedRows: result.affectedRows
    };
};

/**
 * Cập nhật bảng lương
 */
exports.update = async (id, data) => {

    const [result] = await db.execute(
        `
        UPDATE bang_luong
        SET
            LuongThang = ?,
            TongPhuCap = ?,
            TongThuong = ?,
            TongPhat = ?,
            TongGioLamViec = ?,
            SoNguoiPhuThuoc = ?,
            TongLuong = ?,
            ThuNhapTruocThue = ?,
            ThuNhapChiuThue = ?,
            MucGiamTruGiaCanh = ?,
            ThuePhaiDong = ?,
            NgayTao = ?,
            NgayThanhToan = ?,
            LuongThucNhan = ?,
            KyLuong = ?,
            MaTK = ?
        WHERE MaBangLuong = ?
        `,
        [
            data.LuongThang,
            data.TongPhuCap,
            data.TongThuong,
            data.TongPhat,
            data.TongGioLamViec,
            data.SoNguoiPhuThuoc,
            data.TongLuong,
            data.ThuNhapTruocThue,
            data.ThuNhapChiuThue,
            data.MucGiamTruGiaCanh,
            data.ThuePhaiDong,
            data.NgayTao,
            data.NgayThanhToan,
            data.LuongThucNhan,
            data.KyLuong,
            data.MaTK,
            id
        ]
    );

    return {
        affectedRows: result.affectedRows
    };
};

/**
 * Xóa bảng lương
 */
exports.delete = async (id) => {

    const [result] = await db.execute(
        `
        DELETE FROM bang_luong
        WHERE MaBangLuong = ?
        `,
        [id]
    );

    return {
        affectedRows: result.affectedRows
    };
};