const db = require('../config/db.config');

async function signUp(params) {
    try{
        const dbPool = db.getConnection();

        const strQuery = `SELECT * FROM usuarios WHERE nombre = '${params.nombre}';`;
        const [rows, columns] = await dbPool.query(strQuery);

        if(rows.length != 0) {
            return {message: 'error', description: 'El nombre de usuario ya ha sido utilizado, intente con otro'}
        }

        const strQuery1 = `SELECT * FROM usuarios WHERE correo = '${params.correo}';`;
        const [rows1, columns1] = await dbPool.query(strQuery1);

        if(rows1.length != 0) {
            return {message: 'error', description: 'El correo ya ha sido utilizado, intente con otro'}
        }

        const strQuery2 = `INSERT INTO 
                            usuarios (nombre, correo, pwd) 
                        VALUES 
                            ('${params.nombre}', '${params.correo}', '${params.pwd}');`;
        const [rows2, columns2] = await dbPool.query(strQuery2);
        if(rows2){
            return {message: 'success', description: 'Usuario inscrito!'}
        } else {
            return {message: 'error', description: 'Hubo un error, consultarlo'}
        }
        
    } catch (ex) {
        return ex;
    }
} 

module.exports = {
    signUp,
}