const db = require("../config/database");

exports.findAll = async () => {

    const [rows] = await db.execute(`
        SELECT *
        FROM lich_su_tang_luong
        ORDER BY MaLSTL DESC
    `);

    return rows;
};

exports.findById = async (id) => {

    const [rows] = await db.execute(
        `
        SELECT *
        FROM lich_su_tang_luong
        WHERE MaLSTL = ?
        `,
        [id]
    );

    return rows[0];
};

/**
 * Thêm lịch sử tăng lương
 */
exports.create = async (data) => {

    const [result] = await db.execute(
        `
        INSERT INTO lich_su_tang_luong
        (
            LuongCoBanCu,
            LuongCoBanMoi,
            BacLuongCu,
            BacLuongMoi,
            NgayApDung,
            MaTK,
            LuongTheoGioCu,
            LuongTheoGioMoi
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        `,
        [
            data.LuongCoBanCu,
            data.LuongCoBanMoi,
            data.BacLuongCu,
            data.BacLuongMoi,
            data.NgayApDung,
            data.MaTK,
            data.LuongTheoGioCu,
            data.LuongTheoGioMoi
        ]
    );

    return {
        insertId: result.insertId,
        affectedRows: result.affectedRows
    };
};

/**
 * Cập nhật lịch sử tăng lương
 */
exports.update = async (id, data) => {

    const [result] = await db.execute(
        `
        UPDATE lich_su_tang_luong
        SET
            LuongCoBanCu = ?,
            LuongCoBanMoi = ?,
            BacLuongCu = ?,
            BacLuongMoi = ?,
            NgayApDung = ?,
            MaTK = ?,
            LuongTheoGioCu = ?,
            LuongTheoGioMoi = ?
        WHERE MaLSTL = ?
        `,
        [
            data.LuongCoBanCu,
            data.LuongCoBanMoi,
            data.BacLuongCu,
            data.BacLuongMoi,
            data.NgayApDung,
            data.MaTK,
            data.LuongTheoGioCu,
            data.LuongTheoGioMoi,
            id
        ]
    );

    return {
        affectedRows: result.affectedRows
    };
};

/**
 * Xóa lịch sử tăng lương
 */
exports.delete = async (id) => {

    const [result] = await db.execute(
        `
        DELETE FROM lich_su_tang_luong
        WHERE MaLSTL = ?
        `,
        [id]
    );

    return {
        affectedRows: result.affectedRows
    };
};