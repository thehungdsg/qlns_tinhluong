const db = require("../config/database");

exports.findAll = async () => {

    const [rows] = await db.execute(`
        SELECT *
        FROM tai_khoan
        ORDER BY MaTK  DESC
    `); 
    return rows;
};
// Lấy theo ID
exports.findById = async (id) => {

    const [rows] = await db.execute(
        `
        SELECT *
        FROM tai_khoan
        WHERE MaTK = ?
        `,
        [id]
    );

    return rows[0];
};

// Thêm tài khoản
exports.create = async (data) => {

    const [result] = await db.execute(
        `
        INSERT INTO tai_khoan
        (
            MaNhanVien,
            HoTen,
            GioiTinh,
            NgaySinh,
            DiaChi,
            SoDienThoai,
            CCCD,
            Email,
            Password,
            LoaiNV,
            TrangThai,
            BacLuong,
            LuongCoBanHienTai,
            LuongTheoGioHienTai,
            SoNgayNghiPhep,
            SoNgayChuaNghi,
            MaVaiTro,
            MaCN,
            QuanLyBoi
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `,
        [
            data.MaNhanVien,
            data.HoTen,
            data.GioiTinh,
            data.NgaySinh,
            data.DiaChi,
            data.SoDienThoai,
            data.CCCD,
            data.Email,
            data.Password,
            data.LoaiNV,
            data.TrangThai,
            data.BacLuong,
            data.LuongCoBanHienTai,
            data.LuongTheoGioHienTai,
            data.SoNgayNghiPhep,
            data.SoNgayChuaNghi,
            data.MaVaiTro,
            data.MaCN,
            data.QuanLyBoi
        ]
    );

    return {
        insertId: result.insertId,
        affectedRows: result.affectedRows
    };
};

// Cập nhật tài khoản
exports.update = async (id, data) => {

    const [result] = await db.execute(
        `
        UPDATE tai_khoan
        SET
            HoTen = ?,
            GioiTinh = ?,
            NgaySinh = ?,
            DiaChi = ?,
            SoDienThoai = ?,
            CCCD = ?,
            Email = ?,
            LoaiNV = ?,
            TrangThai = ?,
            BacLuong = ?,
            LuongCoBanHienTai = ?,
            LuongTheoGioHienTai = ?,
            SoNgayNghiPhep = ?,
            SoNgayChuaNghi = ?,
            MaVaiTro = ?,
            MaCN = ?,
            QuanLyBoi = ?
        WHERE MaTK = ?
        `,
        [
            data.HoTen,
            data.GioiTinh,
            data.NgaySinh,
            data.DiaChi,
            data.SoDienThoai,
            data.CCCD,
            data.Email,
            data.LoaiNV,
            data.TrangThai,
            data.BacLuong,
            data.LuongCoBanHienTai,
            data.LuongTheoGioHienTai,
            data.SoNgayNghiPhep,
            data.SoNgayChuaNghi,
            data.MaVaiTro,
            data.MaCN,
            data.QuanLyBoi,
            id
        ]
    );

    return {
        affectedRows: result.affectedRows
    };
};

// Xóa tài khoản
exports.delete = async (id) => {

    const [result] = await db.execute(
        `
        DELETE FROM tai_khoan
        WHERE MaTK = ?
        `,
        [id]
    );

    return {
        affectedRows: result.affectedRows
    };
};