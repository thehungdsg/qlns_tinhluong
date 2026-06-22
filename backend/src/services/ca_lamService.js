const caLamModel = require('../models/ca_lamModel');

exports.getAll = async ()=> {
    try{
        const danhSach = await caLamModel.findAll();
        return danhSach;
    } catch (error) {
        throw error;
    }
}

exports.getById = async (id) => {
    try {
        const caLam = await caLamModel.findById(id);
        return caLam;
    } catch (error) {
        throw error;
    }
}

exports.create = async (data) => {
    try {
        const result = await caLamModel.create(data);
        return result;
    } catch (error) {
        throw error;
    }
}   

exports.update = async (id, data) => {
    try {
        const result = await caLamModel.update(id, data);
        return result;
    } catch (error) {
        throw error;
    }
};


exports.delete = async (id) => {
    try {
        const result = await caLamModel.delete(id);  
        return result;
    } catch (error) {
        throw error;
    }
};
