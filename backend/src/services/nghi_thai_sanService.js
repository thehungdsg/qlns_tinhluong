const nghiThaiSanModel = require('../models/nghi_thai_sanModel');

exports.getAll = async ()=> {
    try{
        const danhSach = await nghiThaiSanModel.findAll();
        return danhSach;
    } catch (error) {
        throw error;
    }
}

exports.getById = async (id) => {
    try {
        const nghiThaiSan = await nghiThaiSanModel.findById(id);
        return nghiThaiSan;
    } catch (error) {
        throw error;
    }
}

exports.create = async (data) => {
    try {
        const result = await nghiThaiSanModel.create(data);
        return result;
    } catch (error) {
        throw error;
    }
}   

exports.update = async (id, data) => {
    try {
        const result = await nghiThaiSanModel.update(id, data);
        return result;
    } catch (error) {
        throw error;
    }
};


exports.delete = async (id) => {
    try {
        const result = await nghiThaiSanModel.delete(id);  
        return result;
    } catch (error) {
        throw error;
    }
};
