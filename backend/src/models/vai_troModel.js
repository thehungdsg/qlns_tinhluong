const db = require("../config/database");

exports.findAll = async () => {

    const [rows] = await db.execute(`
        SELECT *
        FROM vai_tro
        ORDER BY MaVaiTro DESC
    `);

    return rows;
};

exports.findById = async (id) => {

    const [rows] = await db.execute(
        `
        SELECT *
        FROM vai_tro
        WHERE MaVaiTro = ?
        `,
        [id]
    );

    return rows[0];
};

/**
 * Thêm vai trò mới
 */
exports.create = async (data) => {

    const [result] = await db.execute(
        `
        INSERT INTO vai_tro
        (
            Quyen
        )
        VALUES (?)
        `,
        [
            data.Quyen
        ]
    );

    return {
        insertId: result.insertId,
        affectedRows: result.affectedRows
    };
};

/**
 * Cập nhật vai trò
 */
exports.update = async (id, data) => {

    const [result] = await db.execute(
        `
        UPDATE vai_tro
        SET
            Quyen = ?
        WHERE MaVaiTro = ?
        `,
        [
            data.Quyen,
            id
        ]
    );

    return {
        affectedRows: result.affectedRows
    };
};

/**
 * Xóa vai trò
 */
exports.delete = async (id) => {

    const [result] = await db.execute(
        `
        DELETE FROM vai_tro
        WHERE MaVaiTro = ?
        `,
        [id]
    );

    return {
        affectedRows: result.affectedRows
    };
};