const vaiTroModel = require('../models/vai_troModel');

exports.getAll = async ()=> {
    try{
        const danhSach = await vaiTroModel.findAll();
        return danhSach;
    } catch (error) {
        throw error;
    }
}

exports.getById = async (id) => {
    try {
        const vaiTro = await vaiTroModel.findById(id);
        return vaiTro;
    } catch (error) {
        throw error;
    }
}

exports.create = async (data) => {
    try {
        const result = await vaiTroModel.create(data);
        return result;
    } catch (error) {
        throw error;
    }
}   

exports.update = async (id, data) => {
    try {
        const result = await vaiTroModel.update(id, data);
        return result;
    } catch (error) {
        throw error;
    }
};


exports.delete = async (id) => {
    try {
        const result = await vaiTroModel.delete(id);  
        return result;
    } catch (error) {
        throw error;
    }
};
