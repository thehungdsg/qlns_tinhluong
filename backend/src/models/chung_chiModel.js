const db = require("../config/database");

exports.findAll = async () => {

    const [rows] = await db.execute(`
        SELECT *
        FROM chung_chi
        ORDER BY MaCC DESC
    `);

    return rows;
};

exports.findById = async (id) => {

    const [rows] = await db.execute(
        `
        SELECT *
        FROM chung_chi
        WHERE MaCC = ?
        `,
        [id]
    );

    return rows[0];
};

/**
 * Thêm chứng chỉ
 */
exports.create = async (data) => {

    const [result] = await db.execute(
        `
        INSERT INTO chung_chi
        (
            TenCC,
            FileCC,
            NoiDaoTao,
            NgayCap,
            NgayHetHan,
            GhiChu,
            TrangThai,
            MaTK
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        `,
        [
            data.TenCC,
            data.FileCC,
            data.NoiDaoTao,
            data.NgayCap,
            data.NgayHetHan,
            data.GhiChu,
            data.TrangThai,
            data.MaTK
        ]
    );

    return {
        insertId: result.insertId,
        affectedRows: result.affectedRows
    };
};

/**
 * Cập nhật chứng chỉ
 */
exports.update = async (id, data) => {

    const [result] = await db.execute(
        `
        UPDATE chung_chi
        SET
            TenCC = ?,
            FileCC = ?,
            NoiDaoTao = ?,
            NgayCap = ?,
            NgayHetHan = ?,
            GhiChu = ?,
            TrangThai = ?,
            MaTK = ?
        WHERE MaCC = ?
        `,
        [
            data.TenCC,
            data.FileCC,
            data.NoiDaoTao,
            data.NgayCap,
            data.NgayHetHan,
            data.GhiChu,
            data.TrangThai,
            data.MaTK,
            id
        ]
    );

    return {
        affectedRows: result.affectedRows
    };
};

/**
 * Xóa chứng chỉ
 */
exports.delete = async (id) => {

    const [result] = await db.execute(
        `
        DELETE FROM chung_chi
        WHERE MaCC = ?
        `,
        [id]
    );

    return {
        affectedRows: result.affectedRows
    };
};