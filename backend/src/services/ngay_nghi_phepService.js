const ngayNghiPhepModel = require('../models/ngay_nghi_phepModel');

exports.getAll = async ()=> {
    try{
        const danhSach = await ngayNghiPhepModel.findAll();
        return danhSach;
    } catch (error) {
        throw error;
    }
}

exports.getById = async (id) => {
    try {
        const ngayNghiPhep = await ngayNghiPhepModel.findById(id);
        return ngayNghiPhep;
    } catch (error) {
        throw error;
    }
}

exports.create = async (data) => {
    try {
        const result = await ngayNghiPhepModel.create(data);
        return result;
    } catch (error) {
        throw error;
    }
}   

exports.update = async (id, data) => {
    try {
        const result = await ngayNghiPhepModel.update(id, data);
        return result;
    } catch (error) {
        throw error;
    }
};


exports.delete = async (id) => {
    try {
        const result = await ngayNghiPhepModel.delete(id);  
        return result;
    } catch (error) {
        throw error;
    }
};
