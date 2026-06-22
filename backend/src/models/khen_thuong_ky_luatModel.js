const db = require("../config/database");

exports.findAll = async () => {

    const [rows] = await db.execute(`
        SELECT *
        FROM khen_thuong_ky_luat
        ORDER BY MaKTKL DESC
    `);

    return rows;
};

exports.findById = async (id) => {

    const [rows] = await db.execute(
        `
        SELECT *
        FROM khen_thuong_ky_luat
        WHERE MaKTKL = ?
        `,
        [id]
    );

    return rows[0];
};

/**
 * Thêm khen thưởng / kỷ luật
 */
exports.create = async (data) => {

    const [result] = await db.execute(
        `
        INSERT INTO khen_thuong_ky_luat
        (
            MaLLV,
            ThuongPhat,
            LyDo,
            MucThuongPhat,
            DuocMienThue
        )
        VALUES (?, ?, ?, ?, ?)
        `,
        [
            data.MaLLV,
            data.ThuongPhat,
            data.LyDo,
            data.MucThuongPhat,
            data.DuocMienThue
        ]
    );

    return {
        insertId: result.insertId,
        affectedRows: result.affectedRows
    };
};

/**
 * Cập nhật khen thưởng / kỷ luật
 */
exports.update = async (id, data) => {

    const [result] = await db.execute(
        `
        UPDATE khen_thuong_ky_luat
        SET
            MaLLV = ?,
            ThuongPhat = ?,
            LyDo = ?,
            MucThuongPhat = ?,
            DuocMienThue = ?
        WHERE MaKTKL = ?
        `,
        [
            data.MaLLV,
            data.ThuongPhat,
            data.LyDo,
            data.MucThuongPhat,
            data.DuocMienThue,
            id
        ]
    );

    return {
        affectedRows: result.affectedRows
    };
};

/**
 * Xóa khen thưởng / kỷ luật
 */
exports.delete = async (id) => {

    const [result] = await db.execute(
        `
        DELETE FROM khen_thuong_ky_luat
        WHERE MaKTKL = ?
        `,
        [id]
    );

    return {
        affectedRows: result.affectedRows
    };
};