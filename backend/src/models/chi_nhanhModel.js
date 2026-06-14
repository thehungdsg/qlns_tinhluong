const db = require("../config/database");

exports.findAll = async () => {

    const [rows] = await db.execute(`
        SELECT *
        FROM chi_nhanh
        ORDER BY MaCN  DESC
    `);

    return rows;
};