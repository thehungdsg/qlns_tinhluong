const db = require("../config/database");

exports.findAll = async () => {

    const [rows] = await db.execute(`
        SELECT *
        FROM he_so_phu_cap
        ORDER BY MaHSPC DESC
    `);

    return rows;
};

exports.findById = async (id) => {

    const [rows] = await db.execute(
        `
        SELECT *
        FROM he_so_phu_cap
        WHERE MaHSPC = ?
        `,
        [id]
    );

    return rows[0];
};

/**
 * Thêm hệ số phụ cấp
 */
exports.create = async (data) => {

    const [result] = await db.execute(
        `
        INSERT INTO he_so_phu_cap
        (
            Ngay,
            HeSoLuong,
            LoaiNgay,
            isCaDem,
            MaTK
        )
        VALUES (?, ?, ?, ?, ?)
        `,
        [
            data.Ngay,
            data.HeSoLuong,
            data.LoaiNgay,
            data.isCaDem,
            data.MaTK
        ]
    );

    return {
        insertId: result.insertId,
        affectedRows: result.affectedRows
    };
};

/**
 * Cập nhật hệ số phụ cấp
 */
exports.update = async (id, data) => {

    const [result] = await db.execute(
        `
        UPDATE he_so_phu_cap
        SET
            Ngay = ?,
            HeSoLuong = ?,
            LoaiNgay = ?,
            isCaDem = ?,
            MaTK = ?
        WHERE MaHSPC = ?
        `,
        [
            data.Ngay,
            data.HeSoLuong,
            data.LoaiNgay,
            data.isCaDem,
            data.MaTK,
            id
        ]
    );

    return {
        affectedRows: result.affectedRows
    };
};

/**
 * Xóa hệ số phụ cấp
 */
exports.delete = async (id) => {

    const [result] = await db.execute(
        `
        DELETE FROM he_so_phu_cap
        WHERE MaHSPC = ?
        `,
        [id]
    );

    return {
        affectedRows: result.affectedRows
    };
};