const db = require('../config/db.config');

async function signUp(params) {
    try{
        const dbPool = db.getConnection();

        const strQuery = `SELECT * FROM usuarios WHERE nombre = '${params.name}';`;
        const [rows, columns] = await dbPool.query(strQuery);

        if(rows.length != 0) {
            return {message: 'error', description: 'Username occupied, try diferent username'}
        }

        const strQuery1 = `SELECT * FROM usuarios WHERE correo = '${params.email}';`;
        const [rows1, columns1] = await dbPool.query(strQuery1);

        if(rows1.length != 0) {
            return {message: 'error', description: 'Email registered, try diferent email'}
        }

        const strQuery2 = `INSERT INTO 
                            usuarios (nombre, correo, pwd) 
                        VALUES 
                            ('${params.name}', '${params.email}', '${params.pwd}');`;
        const [rows2, columns2] = await dbPool.query(strQuery2);
        if(rows2){
            let userInfo = {
                name: params.name,
                email: params.email,
            }
            return {message: 'success', description: 'User registered!', data: userInfo}
        } else {
            return {message: 'error', description: 'An error has ocurred, please consult'}
        }
        
    } catch (ex) {
        return ex;
    }
};

async function login(params){
    try{
        const dbPool = db.getConnection();
        const strQuery = `SELECT * FROM usuarios WHERE (correo = '${params.user}' OR nombre = '${params.user}');`;
        const [rows, columns] = await dbPool.query(strQuery);
        
        if(!rows){
            return {message: 'error', description: 'User has not been found'};
        } else if(rows[0].pwd == params.pwd){
            let userInfo = {
                id: rows[0].id,
                name: rows[0].nombre,
                email: rows[0].correo,
            }
            return {message: 'success', description: 'Login correct, welcome back!', data: userInfo};
        } else {
            return {message: 'error', description: 'Password incorrect, try again'};
        }
    } catch(ex){
        return ex;
    }
}

module.exports = {
    signUp,
    login,
}