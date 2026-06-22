const db = require("../config/database");

exports.findAll = async () => {

    const [rows] = await db.execute(`
        SELECT *
        FROM cham_cong
        ORDER BY MaChamCong DESC
    `);

    return rows;
};

exports.findById = async (id) => {

    const [rows] = await db.execute(
        `
        SELECT *
        FROM cham_cong
        WHERE MaChamCong = ?
        `,
        [id]
    );

    return rows[0];
};

/**
 * Thêm chấm công
 */
exports.create = async (data) => {

    const [result] = await db.execute(
        `
        INSERT INTO cham_cong
        (
            NgayChamCong,
            GioVao,
            GioRa,
            DiTre,
            VeSom,
            MaLLV,
            TrangThai,
            MaCTBL
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        `,
        [
            data.NgayChamCong,
            data.GioVao,
            data.GioRa,
            data.DiTre,
            data.VeSom,
            data.MaLLV,
            data.TrangThai,
            data.MaCTBL
        ]
    );

    return {
        insertId: result.insertId,
        affectedRows: result.affectedRows
    };
};

/**
 * Cập nhật chấm công
 */
exports.update = async (id, data) => {

    const [result] = await db.execute(
        `
        UPDATE cham_cong
        SET
            NgayChamCong = ?,
            GioVao = ?,
            GioRa = ?,
            DiTre = ?,
            VeSom = ?,
            MaLLV = ?,
            TrangThai = ?,
            MaCTBL = ?
        WHERE MaChamCong = ?
        `,
        [
            data.NgayChamCong,
            data.GioVao,
            data.GioRa,
            data.DiTre,
            data.VeSom,
            data.MaLLV,
            data.TrangThai,
            data.MaCTBL,
            id
        ]
    );

    return {
        affectedRows: result.affectedRows
    };
};

/**
 * Xóa chấm công
 */
exports.delete = async (id) => {

    const [result] = await db.execute(
        `
        DELETE FROM cham_cong
        WHERE MaChamCong = ?
        `,
        [id]
    );

    return {
        affectedRows: result.affectedRows
    };
};