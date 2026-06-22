const heSoPhuCapModel = require('../models/he_so_phu_capModel');

exports.getAll = async ()=> {
    try{
        const danhSach = await heSoPhuCapModel.findAll();
        return danhSach;
    } catch (error) {
        throw error;
    }
}

exports.getById = async (id) => {
    try {
        const heSoPhuCap = await heSoPhuCapModel.findById(id);
        return heSoPhuCap;
    } catch (error) {
        throw error;
    }
}

exports.create = async (data) => {
    try {
        const result = await heSoPhuCapModel.create(data);
        return result;
    } catch (error) {
        throw error;
    }
}   

exports.update = async (id, data) => {
    try {
        const result = await heSoPhuCapModel.update(id, data);
        return result;
    } catch (error) {
        throw error;
    }
};


exports.delete = async (id) => {
    try {
        const result = await heSoPhuCapModel.delete(id);  
        return result;
    } catch (error) {
        throw error;
    }
};
