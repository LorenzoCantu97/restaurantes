const mysql = require('mysql2');
const dotenv = require('dotenv').config();

function getConnection() {
    try{
        //console.log("dbName", dbName);
        
        const pool = mysql.createPool({
            host: process.env.host,
            user: process.env.user,
            database: process.env.database,
            password: process.env.password,
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0
        });

        pool.on("connection",
            function hanldeEvent() {
                console.log("Pool connection established.");
            }
        );

        pool.on("enqueue",
            function hanldeEvent() {
                console.log("Waiting for connection slot.");
            }
        );

        pool.on("release",
            function hanldeEvent() {
                console.log("Pool connection closed or released.");
            }
        );

        pool.on("acquire",
            function hanldeEvent() {
                console.log("Pool connection acquired.");
            }
        );
        const promisePool = pool.promise();
        return promisePool;
    }catch(exception){
        console.log("getConnection: ", exception);
    }
}

module.exports = {getConnection}
