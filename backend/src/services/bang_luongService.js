const bangLuongModel = require('../models/bang_luongModel');

exports.getAll = async ()=> {
    try{
        const danhSach = await bangLuongModel.findAll();
        return danhSach;
    } catch (error) {
        throw error;
    }
}

exports.getById = async (id) => {
    try {
        const bangLuong = await bangLuongModel.findById(id);
        return bangLuong;
    } catch (error) {
        throw error;
    }
}

exports.create = async (data) => {
    try {
        const result = await bangLuongModel.create(data);
        return result;
    } catch (error) {
        throw error;
    }
}   

exports.update = async (id, data) => {
    try {
        const result = await bangLuongModel.update(id, data);
        return result;
    } catch (error) {
        throw error;
    }
};


exports.delete = async (id) => {
    try {
        const result = await bangLuongModel.delete(id);  
        return result;
    } catch (error) {
        throw error;
    }
};
