const chiNhanhModel = require('../models/chi_nhanhModel');

exports.getAll = async ()=> {
    try{
        const danhSach = await chiNhanhModel.findAll();
        return danhSach;
    } catch (error) {
        throw error;
    }
}