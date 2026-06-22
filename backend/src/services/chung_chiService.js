const chungChiModel = require('../models/chung_chiModel');

exports.getAll = async ()=> {
    try{
        const danhSach = await chungChiModel.findAll();
        return danhSach;
    } catch (error) {
        throw error;
    }
}

exports.getById = async (id) => {
    try {
        const chungChi = await chungChiModel.findById(id);
        return chungChi;
    } catch (error) {
        throw error;
    }
}

exports.create = async (data) => {
    try {
        const result = await chungChiModel.create(data);
        return result;
    } catch (error) {
        throw error;
    }
}   

exports.update = async (id, data) => {
    try {
        const result = await chungChiModel.update(id, data);
        return result;
    } catch (error) {
        throw error;
    }
};


exports.delete = async (id) => {
    try {
        const result = await chungChiModel.delete(id);  
        return result;
    } catch (error) {
        throw error;
    }
};
