const nguoiPhuThuocModel = require('../models/nguoi_phu_thuocModel');

exports.getAll = async ()=> {
    try{
        const danhSach = await nguoiPhuThuocModel.findAll();
        return danhSach;
    } catch (error) {
        throw error;
    }
}

exports.getById = async (id) => {
    try {
        const nguoiPhuThuoc = await nguoiPhuThuocModel.findById(id);
        return nguoiPhuThuoc;
    } catch (error) {
        throw error;
    }
}

exports.create = async (data) => {
    try {
        const result = await nguoiPhuThuocModel.create(data);
        return result;
    } catch (error) {
        throw error;
    }
}   

exports.update = async (id, data) => {
    try {
        const result = await nguoiPhuThuocModel.update(id, data);
        return result;
    } catch (error) {
        throw error;
    }
};


exports.delete = async (id) => {
    try {
        const result = await nguoiPhuThuocModel.delete(id);  
        return result;
    } catch (error) {
        throw error;
    }
};
