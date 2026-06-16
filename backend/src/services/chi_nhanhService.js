const chiNhanhModel = require('../models/chi_nhanhModel');

exports.getAll = async ()=> {
    try{
        const danhSach = await chiNhanhModel.findAll();
        return danhSach;
    } catch (error) {
        throw error;
    }
}

exports.getById = async (id) => {
    try {
        const chiNhanh = await chiNhanhModel.findById(id);
        return chiNhanh;
    } catch (error) {
        throw error;
    }
}

exports.create = async (data) => {
    try {
        const result = await chiNhanhModel.create(data);
        return result;
    } catch (error) {
        throw error;
    }
}   

exports.update = async (id, data) => {
    try {
        const result = await chiNhanhModel.update(id, data);
        return result;
    } catch (error) {
        throw error;
    }
};


exports.delete = async (id) => {
    try {
        const result = await chiNhanhModel.delete(id);  
        return result;
    } catch (error) {
        throw error;
    }
};
