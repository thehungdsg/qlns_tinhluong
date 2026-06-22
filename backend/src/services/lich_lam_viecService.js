const lichLamViecModel = require('../models/lich_lam_viecModel');

exports.getAll = async ()=> {
    try{
        const danhSach = await lichLamViecModel.findAll();
        return danhSach;
    } catch (error) {
        throw error;
    }
}

exports.getById = async (id) => {
    try {
        const lichLamViec = await lichLamViecModel.findById(id);
        return lichLamViec;
    } catch (error) {
        throw error;
    }
}

exports.create = async (data) => {
    try {
        const result = await lichLamViecModel.create(data);
        return result;
    } catch (error) {
        throw error;
    }
}   

exports.update = async (id, data) => {
    try {
        const result = await lichLamViecModel.update(id, data);
        return result;
    } catch (error) {
        throw error;
    }
};


exports.delete = async (id) => {
    try {
        const result = await lichLamViecModel.delete(id);  
        return result;
    } catch (error) {
        throw error;
    }
};
