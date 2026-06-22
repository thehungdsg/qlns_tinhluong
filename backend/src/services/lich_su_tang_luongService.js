const lichSuTangLuongModel = require('../models/lich_su_tang_luongModel');

exports.getAll = async ()=> {
    try{
        const danhSach = await lichSuTangLuongModel.findAll();
        return danhSach;
    } catch (error) {
        throw error;
    }
}

exports.getById = async (id) => {
    try {
        const lichSuTangLuong = await lichSuTangLuongModel.findById(id);
        return lichSuTangLuong;
    } catch (error) {
        throw error;
    }
}

exports.create = async (data) => {
    try {
        const result = await lichSuTangLuongModel.create(data);
        return result;
    } catch (error) {
        throw error;
    }
}   

exports.update = async (id, data) => {
    try {
        const result = await lichSuTangLuongModel.update(id, data);
        return result;
    } catch (error) {
        throw error;
    }
};


exports.delete = async (id) => {
    try {
        const result = await lichSuTangLuongModel.delete(id);  
        return result;
    } catch (error) {
        throw error;
    }
};
