const db = require("../config/database");

exports.findAll = async () => {

    const [rows] = await db.execute(`
        SELECT *
        FROM ngay_nghi_phep
        ORDER BY MaNNP DESC
    `);

    return rows;
};

exports.findById = async (id) => {

    const [rows] = await db.execute(
        `
        SELECT *
        FROM ngay_nghi_phep
        WHERE MaNNP = ?
        `,
        [id]
    );

    return rows[0];
};

/**
 * Thêm đơn nghỉ phép
 */
exports.create = async (data) => {

    const [result] = await db.execute(
        `
        INSERT INTO ngay_nghi_phep
        (
            MaTK,
            NgayBatDau,
            NgayKetThuc,
            SoNgayNghi,
            NgayDangKy,
            TrangThai
        )
        VALUES (?, ?, ?, ?, ?, ?)
        `,
        [
            data.MaTK,
            data.NgayBatDau,
            data.NgayKetThuc,
            data.SoNgayNghi,
            data.NgayDangKy,
            data.TrangThai
        ]
    );

    return {
        insertId: result.insertId,
        affectedRows: result.affectedRows
    };
};

/**
 * Cập nhật đơn nghỉ phép
 */
exports.update = async (id, data) => {

    const [result] = await db.execute(
        `
        UPDATE ngay_nghi_phep
        SET
            MaTK = ?,
            NgayBatDau = ?,
            NgayKetThuc = ?,
            SoNgayNghi = ?,
            NgayDangKy = ?,
            TrangThai = ?
        WHERE MaNNP = ?
        `,
        [
            data.MaTK,
            data.NgayBatDau,
            data.NgayKetThuc,
            data.SoNgayNghi,
            data.NgayDangKy,
            data.TrangThai,
            id
        ]
    );

    return {
        affectedRows: result.affectedRows
    };
};

/**
 * Xóa đơn nghỉ phép
 */
exports.delete = async (id) => {

    const [result] = await db.execute(
        `
        DELETE FROM ngay_nghi_phep
        WHERE MaNNP = ?
        `,
        [id]
    );

    return {
        affectedRows: result.affectedRows
    };
};