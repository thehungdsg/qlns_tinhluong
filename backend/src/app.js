const express = require('express');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');

dotenv.config();

// Middleware
app.use(cors());
app.use(express.json());

const chiNhanhRoute = require('./routes/chi_nhanhRoute');

app.use('/api', chiNhanhRoute);

const taiKhoanRoute = require('./routes/tai_khoanRoute');

app.use('/api', taiKhoanRoute);

const vaiTroRoute = require('./routes/vai_troRoute');

app.use('/api', vaiTroRoute);

const caLamRoute = require('./routes/ca_lamRoute');

app.use('/api', caLamRoute);

const hopDongLdRoute = require('./routes/hop_dong_ldRoute');

app.use('/api', hopDongLdRoute);

const lichLamViecRoute = require('./routes/lich_lam_viecRoute');

app.use('/api', lichLamViecRoute);

const bangLuongRoute = require('./routes/bang_luongRoute');

app.use('/api', bangLuongRoute);

const chamCongRoute = require('./routes/cham_congRoute');

app.use('/api', chamCongRoute);

const chiTietBangLuongRoute = require('./routes/chi_tiet_bang_luongRoute');

app.use('/api', chiTietBangLuongRoute);

const chungChiRoute = require('./routes/chung_chiRoute');

app.use('/api', chungChiRoute);

const heSoPhuCapRoute = require('./routes/he_so_phu_capRoute');

app.use('/api', heSoPhuCapRoute);

const khenThuongKyLuatRoute = require('./routes/khen_thuong_ky_luatRoute');

app.use('/api', khenThuongKyLuatRoute);

const lichSuTangLuongRoute = require('./routes/lich_su_tang_luongRoute');

app.use('/api', lichSuTangLuongRoute);

const ngayNghiPhepRoute = require('./routes/ngay_nghi_phepRoute');

app.use('/api', ngayNghiPhepRoute);

const nghiThaiSanRoute = require('./routes/nghi_thai_sanRoute');

app.use('/api', nghiThaiSanRoute);

const nguoiPhuThuocRoute = require('./routes/nguoi_phu_thuocRoute');

app.use('/api', nguoiPhuThuocRoute);

const phuCapRoute = require('./routes/phu_capRoute');

app.use('/api', phuCapRoute);

const thangLuongRoute = require('./routes/thang_luongRoute');

app.use('/api', thangLuongRoute);


module.exports = app;