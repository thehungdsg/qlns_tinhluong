const db = require("../config/database");

exports.findAll = async () => {

    const [rows] = await db.execute(`
        SELECT *
        FROM lich_lam_viec
        ORDER BY MaLLV DESC
    `);

    return rows;
};

exports.findById = async (id) => {

    const [rows] = await db.execute(
        `
        SELECT *
        FROM lich_lam_viec
        WHERE MaLLV = ?
        `,
        [id]
    );

    return rows[0];
};

/**
 * Thêm lịch làm việc
 */
exports.create = async (data) => {

    const [result] = await db.execute(
        `
        INSERT INTO lich_lam_viec
        (
            MaTK,
            MaCaLam,
            TrangThai,
            NgayLam,
            MaLLVCu
        )
        VALUES (?, ?, ?, ?, ?)
        `,
        [
            data.MaTK,
            data.MaCaLam,
            data.TrangThai,
            data.NgayLam,
            data.MaLLVCu
        ]
    );

    return {
        insertId: result.insertId,
        affectedRows: result.affectedRows
    };
};

/**
 * Cập nhật lịch làm việc
 */
exports.update = async (id, data) => {

    const [result] = await db.execute(
        `
        UPDATE lich_lam_viec
        SET
            MaTK = ?,
            MaCaLam = ?,
            TrangThai = ?,
            NgayLam = ?,
            MaLLVCu = ?
        WHERE MaLLV = ?
        `,
        [
            data.MaTK,
            data.MaCaLam,
            data.TrangThai,
            data.NgayLam,
            data.MaLLVCu,
            id
        ]
    );

    return {
        affectedRows: result.affectedRows
    };
};

/**
 * Xóa lịch làm việc
 */
exports.delete = async (id) => {

    const [result] = await db.execute(
        `
        DELETE FROM lich_lam_viec
        WHERE MaLLV = ?
        `,
        [id]
    );

    return {
        affectedRows: result.affectedRows
    };
};