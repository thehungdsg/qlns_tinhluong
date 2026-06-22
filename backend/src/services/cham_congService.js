const chamCongModel = require('../models/cham_congModel');

exports.getAll = async ()=> {
    try{
        const danhSach = await chamCongModel.findAll();
        return danhSach;
    } catch (error) {
        throw error;
    }
}

exports.getById = async (id) => {
    try {
        const chamCong = await chamCongModel.findById(id);
        return chamCong;
    } catch (error) {
        throw error;
    }
}

exports.create = async (data) => {
    try {
        const result = await chamCongModel.create(data);
        return result;
    } catch (error) {
        throw error;
    }
}   

exports.update = async (id, data) => {
    try {
        const result = await chamCongModel.update(id, data);
        return result;
    } catch (error) {
        throw error;
    }
};


exports.delete = async (id) => {
    try {
        const result = await chamCongModel.delete(id);  
        return result;
    } catch (error) {
        throw error;
    }
};
