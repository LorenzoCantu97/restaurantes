const db = require('../config/db.config');

async function getAll(params) {
    try {
        const dbPool = db.getConnection();
        const strQuery = `SELECT * FROM restaurantes WHERE usuario = '${params.user}';`;
        const [rows, columns] = await dbPool.query(strQuery);
        
        if(!rows){
            return {message: 'error', description: 'User has no registered any restaurant'}
        } else {
            return {message: 'success', data: rows}
        }
    } catch (ex) {
        return ex;
    }
};

async function newRestaurant(params) {
    try {
        const dbPool = db.getConnection();
        const strQuery = `INSERT INTO restaurantes (nombre, direccion, telefono, usuario) VALUES ('${params.name}', '${params.address}', '${params.phone}', '${params.user}');`;

        const [rows, columns] = await dbPool.query(strQuery);
        if(!rows){
            return {message: 'error', description: 'An error has ocurred, please consult'}
        } else {
            return {message: 'success', description: 'Restaurant saved correctly' ,data: rows}
        }
    } catch (ex) {
        return ex;
    }
};

async function updateRestaurant(params) { 
    try {
        const dbPool = db.getConnection();
        const strQuery = `UPDATE restaurantes SET nombre = '${params.name}', direccion = '${params.address}', telefono = '${params.phone}' WHERE id = ${params.id} AND usuario = '${params.user}'`;
        
        const [rows, columns] = await dbPool.query(strQuery);
        if(!rows) {
            return {message: 'error', description: 'An error has ocurred, please consult'};
        } else { 
            return {message: 'success', description: 'Restaurant updated correctly'}
        }
    } catch (ex) {
        return ex;
    }
};

async function deleteRestaurant(params) {
    try {
        const dbPool = db.getConnection();
        const strQuery = `DELETE FROM restaurantes WHERE id = '${params.id}';`;

        const [rows, columns] = await dbPool.query(strQuery);
        if(!rows) {
            return {message: 'error', description: 'An error has ocurred, please consult'};
        } else { 
            return {message: 'success', description: 'Restaurant deleted correctly'}
        }
    } catch (ex) {
        return ex;
    }
}

module.exports = {
    getAll,
    newRestaurant,
    updateRestaurant,
    deleteRestaurant
}