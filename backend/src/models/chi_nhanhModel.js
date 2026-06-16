const db = require("../config/database");

exports.findAll = async () => {

    const [rows] = await db.execute(`
        SELECT *
        FROM chi_nhanh
        ORDER BY MaCN  DESC
    `);

    return rows;
};

exports.findById = async (id) => {

    const [rows] = await db.execute(
        `SELECT *
         FROM chi_nhanh
         WHERE MaCN = ?`,
        [id]
    );

    return rows[0];
};

/**
 * Thêm chi nhánh mới
 */
exports.create = async (data) => {

    const [result] = await db.execute(
        `
        INSERT INTO chi_nhanh
        (
            MaCN,
            TenChiNhanh,
            DiaChi
        )
        VALUES (?, ?, ?)
        `,
        [
            data.MaCN,
            data.TenChiNhanh,
            data.DiaChi
        ]
    );

    return {
        insertId: result.insertId,
        affectedRows: result.affectedRows
    };
};

/**
 * Cập nhật chi nhánh
 */
exports.update = async (id, data) => {

    const [result] = await db.execute(
        `
        UPDATE chi_nhanh
        SET
            TenChiNhanh = ?,
            DiaChi = ?
        WHERE MaCN = ?
        `,
        [
            data.TenChiNhanh,
            data.DiaChi,
            id
        ]
    );

    return {
        affectedRows: result.affectedRows
    };
};

/**
 * Xóa chi nhánh
 */
exports.delete = async (id) => {

    const [result] = await db.execute(
        `
        DELETE FROM chi_nhanh
        WHERE MaCN = ?
        `,
        [id]
    );

    return {
        affectedRows: result.affectedRows
    };
};