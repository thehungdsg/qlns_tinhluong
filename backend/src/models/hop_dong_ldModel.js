const db = require("../config/database");

exports.findAll = async () => {

    const [rows] = await db.execute(`
        SELECT *
        FROM hop_dong_ld
        ORDER BY MaHDLD DESC
    `);

    return rows;
};

exports.findById = async (id) => {

    const [rows] = await db.execute(
        `
        SELECT *
        FROM hop_dong_ld
        WHERE MaHDLD = ?
        `,
        [id]
    );

    return rows[0];
};

/**
 * Thêm hợp đồng lao động mới
 */
exports.create = async (data) => {

    const [result] = await db.execute(
        `
        INSERT INTO hop_dong_ld
        (
            TenHD,
            File,
            NgayKy,
            NgayBatDau,
            NgayKetThuc,
            MaTK
        )
        VALUES (?, ?, ?, ?, ?, ?)
        `,
        [
            data.TenHD,
            data.File,
            data.NgayKy,
            data.NgayBatDau,
            data.NgayKetThuc,
            data.MaTK
        ]
    );

    return {
        insertId: result.insertId,
        affectedRows: result.affectedRows
    };
};

/**
 * Cập nhật hợp đồng lao động
 */
exports.update = async (id, data) => {

    const [result] = await db.execute(
        `
        UPDATE hop_dong_ld
        SET
            TenHD = ?,
            File = ?,
            NgayKy = ?,
            NgayBatDau = ?,
            NgayKetThuc = ?,
            MaTK = ?
        WHERE MaHDLD = ?
        `,
        [
            data.TenHD,
            data.File,
            data.NgayKy,
            data.NgayBatDau,
            data.NgayKetThuc,
            data.MaTK,
            id
        ]
    );

    return {
        affectedRows: result.affectedRows
    };
};

/**
 * Xóa hợp đồng lao động
 */
exports.delete = async (id) => {

    const [result] = await db.execute(
        `
        DELETE FROM hop_dong_ld
        WHERE MaHDLD = ?
        `,
        [id]
    );

    return {
        affectedRows: result.affectedRows
    };
};