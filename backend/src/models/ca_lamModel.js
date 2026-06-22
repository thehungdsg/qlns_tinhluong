const db = require("../config/database");

exports.findAll = async () => {

    const [rows] = await db.execute(`
        SELECT *
        FROM ca_lam
        ORDER BY MaCa DESC
    `);

    return rows;
};

exports.findById = async (id) => {

    const [rows] = await db.execute(
        `
        SELECT *
        FROM ca_lam
        WHERE MaCa = ?
        `,
        [id]
    );

    return rows[0];
};

/**
 * Thêm ca làm mới
 */
exports.create = async (data) => {

    const [result] = await db.execute(
        `
        INSERT INTO ca_lam
        (
            TenCa,
            ThoiGianBatDau,
            ThoiGianKetThuc,
            MoTa,
            isCaDem
        )
        VALUES (?, ?, ?, ?, ?)
        `,
        [
            data.TenCa,
            data.ThoiGianBatDau,
            data.ThoiGianKetThuc,
            data.MoTa,
            data.isCaDem
        ]
    );

    return {
        insertId: result.insertId,
        affectedRows: result.affectedRows
    };
};

/**
 * Cập nhật ca làm
 */
exports.update = async (id, data) => {

    const [result] = await db.execute(
        `
        UPDATE ca_lam
        SET
            TenCa = ?,
            ThoiGianBatDau = ?,
            ThoiGianKetThuc = ?,
            MoTa = ?,
            isCaDem = ?
        WHERE MaCa = ?
        `,
        [
            data.TenCa,
            data.ThoiGianBatDau,
            data.ThoiGianKetThuc,
            data.MoTa,
            data.isCaDem,
            id
        ]
    );

    return {
        affectedRows: result.affectedRows
    };
};

/**
 * Xóa ca làm
 */
exports.delete = async (id) => {

    const [result] = await db.execute(
        `
        DELETE FROM ca_lam
        WHERE MaCa = ?
        `,
        [id]
    );

    return {
        affectedRows: result.affectedRows
    };
};