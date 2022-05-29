const mysql = require('mysql');
const conn = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "final"
});

conn.connect((error) => {
    if (error) { 
        console.log("error en db");
    }
    else { 
        console.log("Servidor de DB corriendo");
    }
});

module.exports = conn;