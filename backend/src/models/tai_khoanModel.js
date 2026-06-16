const db = require("../config/database");

exports.findAll = async () => {

    const [rows] = await db.execute(`
        SELECT *
        FROM tai_khoan
        ORDER BY MaTK  DESC
    `); 
    return rows;
};
