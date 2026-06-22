const db = require("../config/database");

exports.findAll = async () => {

    const [rows] = await db.execute(`
        SELECT *
        FROM thang_luong
        ORDER BY MaThangLuong DESC
    `);

    return rows;
};

exports.findById = async (id) => {

    const [rows] = await db.execute(
        `
        SELECT *
        FROM thang_luong
        WHERE MaThangLuong = ?
        `,
        [id]
    );

    return rows[0];
};

/**
 * Thêm thang lương
 */
exports.create = async (data) => {

    const [result] = await db.execute(
        `
        INSERT INTO thang_luong
        (
            LuongCoBan,
            LuongTheoGio,
            BacLuong,
            LoaiNV,
            MaVaiTro
        )
        VALUES (?, ?, ?, ?, ?)
        `,
        [
            data.LuongCoBan,
            data.LuongTheoGio,
            data.BacLuong,
            data.LoaiNV,
            data.MaVaiTro
        ]
    );

    return {
        insertId: result.insertId,
        affectedRows: result.affectedRows
    };
};

/**
 * Cập nhật thang lương
 */
exports.update = async (id, data) => {

    const [result] = await db.execute(
        `
        UPDATE thang_luong
        SET
            LuongCoBan = ?,
            LuongTheoGio = ?,
            BacLuong = ?,
            LoaiNV = ?,
            MaVaiTro = ?
        WHERE MaThangLuong = ?
        `,
        [
            data.LuongCoBan,
            data.LuongTheoGio,
            data.BacLuong,
            data.LoaiNV,
            data.MaVaiTro,
            id
        ]
    );

    return {
        affectedRows: result.affectedRows
    };
};

/**
 * Xóa thang lương
 */
exports.delete = async (id) => {

    const [result] = await db.execute(
        `
        DELETE FROM thang_luong
        WHERE MaThangLuong = ?
        `,
        [id]
    );

    return {
        affectedRows: result.affectedRows
    };
};