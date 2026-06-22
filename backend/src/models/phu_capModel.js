const db = require("../config/database");

exports.findAll = async () => {

    const [rows] = await db.execute(`
        SELECT *
        FROM phu_cap
        ORDER BY MaPhuCap DESC
    `);

    return rows;
};

exports.findById = async (id) => {

    const [rows] = await db.execute(
        `
        SELECT *
        FROM phu_cap
        WHERE MaPhuCap = ?
        `,
        [id]
    );

    return rows[0];
};

/**
 * Thêm phụ cấp
 */
exports.create = async (data) => {

    const [result] = await db.execute(
        `
        INSERT INTO phu_cap
        (
            LoaiPhuCap,
            GiaTriPhuCap,
            TrangThai,
            DuocMienThue,
            MaTK
        )
        VALUES (?, ?, ?, ?, ?)
        `,
        [
            data.LoaiPhuCap,
            data.GiaTriPhuCap,
            data.TrangThai,
            data.DuocMienThue,
            data.MaTK
        ]
    );

    return {
        insertId: result.insertId,
        affectedRows: result.affectedRows
    };
};

/**
 * Cập nhật phụ cấp
 */
exports.update = async (id, data) => {

    const [result] = await db.execute(
        `
        UPDATE phu_cap
        SET
            LoaiPhuCap = ?,
            GiaTriPhuCap = ?,
            TrangThai = ?,
            DuocMienThue = ?,
            MaTK = ?
        WHERE MaPhuCap = ?
        `,
        [
            data.LoaiPhuCap,
            data.GiaTriPhuCap,
            data.TrangThai,
            data.DuocMienThue,
            data.MaTK,
            id
        ]
    );

    return {
        affectedRows: result.affectedRows
    };
};

/**
 * Xóa phụ cấp
 */
exports.delete = async (id) => {

    const [result] = await db.execute(
        `
        DELETE FROM phu_cap
        WHERE MaPhuCap = ?
        `,
        [id]
    );

    return {
        affectedRows: result.affectedRows
    };
};