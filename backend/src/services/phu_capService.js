const phuCapModel = require('../models/phu_capModel');

exports.getAll = async ()=> {
    try{
        const danhSach = await phuCapModel.findAll();
        return danhSach;
    } catch (error) {
        throw error;
    }
}

exports.getById = async (id) => {
    try {
        const phuCap = await phuCapModel.findById(id);
        return phuCap;
    } catch (error) {
        throw error;
    }
}

exports.create = async (data) => {
    try {
        const result = await phuCapModel.create(data);
        return result;
    } catch (error) {
        throw error;
    }
}   

exports.update = async (id, data) => {
    try {
        const result = await phuCapModel.update(id, data);
        return result;
    } catch (error) {
        throw error;
    }
};


exports.delete = async (id) => {
    try {
        const result = await phuCapModel.delete(id);  
        return result;
    } catch (error) {
        throw error;
    }
};
