const chiTietBangLuongModel = require('../models/chi_tiet_bang_luongModel');

exports.getAll = async ()=> {
    try{
        const danhSach = await chiTietBangLuongModel.findAll();
        return danhSach;
    } catch (error) {
        throw error;
    }
}

exports.getById = async (id) => {
    try {
        const chiTietBangLuong = await chiTietBangLuongModel.findById(id);
        return chiTietBangLuong;
    } catch (error) {
        throw error;
    }
}

exports.create = async (data) => {
    try {
        const result = await chiTietBangLuongModel.create(data);
        return result;
    } catch (error) {
        throw error;
    }
}   

exports.update = async (id, data) => {
    try {
        const result = await chiTietBangLuongModel.update(id, data);
        return result;
    } catch (error) {
        throw error;
    }
};


exports.delete = async (id) => {
    try {
        const result = await chiTietBangLuongModel.delete(id);  
        return result;
    } catch (error) {
        throw error;
    }
};
