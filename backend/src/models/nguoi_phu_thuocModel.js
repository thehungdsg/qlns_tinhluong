const db = require("../config/database");

exports.findAll = async () => {

    const [rows] = await db.execute(`
        SELECT *
        FROM nguoi_phu_thuoc
        ORDER BY MaNPT DESC
    `);

    return rows;
};

exports.findById = async (id) => {

    const [rows] = await db.execute(
        `
        SELECT *
        FROM nguoi_phu_thuoc
        WHERE MaNPT = ?
        `,
        [id]
    );

    return rows[0];
};

/**
 * Thêm người phụ thuộc
 */
exports.create = async (data) => {

    const [result] = await db.execute(
        `
        INSERT INTO nguoi_phu_thuoc
        (
            HoTen,
            NgaySinh,
            DiaChi,
            SoDienThoai,
            CCCD,
            TruongHopPhuThuoc,
            QuanHe,
            MaTK
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        `,
        [
            data.HoTen,
            data.NgaySinh,
            data.DiaChi,
            data.SoDienThoai,
            data.CCCD,
            data.TruongHopPhuThuoc,
            data.QuanHe,
            data.MaTK
        ]
    );

    return {
        insertId: result.insertId,
        affectedRows: result.affectedRows
    };
};

/**
 * Cập nhật người phụ thuộc
 */
exports.update = async (id, data) => {

    const [result] = await db.execute(
        `
        UPDATE nguoi_phu_thuoc
        SET
            HoTen = ?,
            NgaySinh = ?,
            DiaChi = ?,
            SoDienThoai = ?,
            CCCD = ?,
            TruongHopPhuThuoc = ?,
            QuanHe = ?,
            MaTK = ?
        WHERE MaNPT = ?
        `,
        [
            data.HoTen,
            data.NgaySinh,
            data.DiaChi,
            data.SoDienThoai,
            data.CCCD,
            data.TruongHopPhuThuoc,
            data.QuanHe,
            data.MaTK,
            id
        ]
    );

    return {
        affectedRows: result.affectedRows
    };
};

/**
 * Xóa người phụ thuộc
 */
exports.delete = async (id) => {

    const [result] = await db.execute(
        `
        DELETE FROM nguoi_phu_thuoc
        WHERE MaNPT = ?
        `,
        [id]
    );

    return {
        affectedRows: result.affectedRows
    };
};