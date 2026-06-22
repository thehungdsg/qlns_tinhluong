const hopDongLdModel = require('../models/hop_dong_ldModel');

exports.getAll = async ()=> {
    try{
        const danhSach = await hopDongLdModel.findAll();
        return danhSach;
    } catch (error) {
        throw error;
    }
}

exports.getById = async (id) => {
    try {
        const hopDongLd = await hopDongLdModel.findById(id);
        return hopDongLd;
    } catch (error) {
        throw error;
    }
}

exports.create = async (data) => {
    try {
        const result = await hopDongLdModel.create(data);
        return result;
    } catch (error) {
        throw error;
    }
}   

exports.update = async (id, data) => {
    try {
        const result = await hopDongLdModel.update(id, data);
        return result;
    } catch (error) {
        throw error;
    }
};


exports.delete = async (id) => {
    try {
        const result = await hopDongLdModel.delete(id);  
        return result;
    } catch (error) {
        throw error;
    }
};
