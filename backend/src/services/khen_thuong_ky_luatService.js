const khenThuongKyLuatModel = require('../models/khen_thuong_ky_luatModel');

exports.getAll = async ()=> {
    try{
        const danhSach = await khenThuongKyLuatModel.findAll();
        return danhSach;
    } catch (error) {
        throw error;
    }
}

exports.getById = async (id) => {
    try {
        const khenThuongKyLuat = await khenThuongKyLuatModel.findById(id);
        return khenThuongKyLuat;
    } catch (error) {
        throw error;
    }
}

exports.create = async (data) => {
    try {
        const result = await khenThuongKyLuatModel.create(data);
        return result;
    } catch (error) {
        throw error;
    }
}   

exports.update = async (id, data) => {
    try {
        const result = await khenThuongKyLuatModel.update(id, data);
        return result;
    } catch (error) {
        throw error;
    }
};


exports.delete = async (id) => {
    try {
        const result = await khenThuongKyLuatModel.delete(id);  
        return result;
    } catch (error) {
        throw error;
    }
};
