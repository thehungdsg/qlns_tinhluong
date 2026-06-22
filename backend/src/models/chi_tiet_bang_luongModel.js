const db = require("../config/database");

exports.findAll = async () => {

    const [rows] = await db.execute(`
        SELECT *
        FROM chi_tiet_bang_luong
        ORDER BY MaCTBL DESC
    `);

    return rows;
};

exports.findById = async (id) => {

    const [rows] = await db.execute(
        `
        SELECT *
        FROM chi_tiet_bang_luong
        WHERE MaCTBL = ?
        `,
        [id]
    );

    return rows[0];
};

/**
 * Thêm chi tiết bảng lương
 */
exports.create = async (data) => {

    const [result] = await db.execute(
        `
        INSERT INTO chi_tiet_bang_luong
        (
            GioLamViec,
            LuongMotGio,
            HeSoLuong,
            isCuoiTuan,
            isNgayLe,
            isCaDem,
            TienLuongCa,
            TienPhat,
            TienPhuCap,
            tongtien,
            Ngay,
            MaBangLuong
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `,
        [
            data.GioLamViec,
            data.LuongMotGio,
            data.HeSoLuong,
            data.isCuoiTuan,
            data.isNgayLe,
            data.isCaDem,
            data.TienLuongCa,
            data.TienPhat,
            data.TienPhuCap,
            data.tongtien,
            data.Ngay,
            data.MaBangLuong
        ]
    );

    return {
        insertId: result.insertId,
        affectedRows: result.affectedRows
    };
};

/**
 * Cập nhật chi tiết bảng lương
 */
exports.update = async (id, data) => {

    const [result] = await db.execute(
        `
        UPDATE chi_tiet_bang_luong
        SET
            GioLamViec = ?,
            LuongMotGio = ?,
            HeSoLuong = ?,
            isCuoiTuan = ?,
            isNgayLe = ?,
            isCaDem = ?,
            TienLuongCa = ?,
            TienPhat = ?,
            TienPhuCap = ?,
            tongtien = ?,
            Ngay = ?,
            MaBangLuong = ?
        WHERE MaCTBL = ?
        `,
        [
            data.GioLamViec,
            data.LuongMotGio,
            data.HeSoLuong,
            data.isCuoiTuan,
            data.isNgayLe,
            data.isCaDem,
            data.TienLuongCa,
            data.TienPhat,
            data.TienPhuCap,
            data.tongtien,
            data.Ngay,
            data.MaBangLuong,
            id
        ]
    );

    return {
        affectedRows: result.affectedRows
    };
};

/**
 * Xóa chi tiết bảng lương
 */
exports.delete = async (id) => {

    const [result] = await db.execute(
        `
        DELETE FROM chi_tiet_bang_luong
        WHERE MaCTBL = ?
        `,
        [id]
    );

    return {
        affectedRows: result.affectedRows
    };
};