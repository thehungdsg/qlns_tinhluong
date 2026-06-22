const thangLuongModel = require('../models/thang_luongModel');

exports.getAll = async ()=> {
    try{
        const danhSach = await thangLuongModel.findAll();
        return danhSach;
    } catch (error) {
        throw error;
    }
}

exports.getById = async (id) => {
    try {
        const thangLuong = await thangLuongModel.findById(id);
        return thangLuong;
    } catch (error) {
        throw error;
    }
}

exports.create = async (data) => {
    try {
        const result = await thangLuongModel.create(data);
        return result;
    } catch (error) {
        throw error;
    }
}   

exports.update = async (id, data) => {
    try {
        const result = await thangLuongModel.update(id, data);
        return result;
    } catch (error) {
        throw error;
    }
};


exports.delete = async (id) => {
    try {
        const result = await thangLuongModel.delete(id);  
        return result;
    } catch (error) {
        throw error;
    }
};
