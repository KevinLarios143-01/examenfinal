const conn = require('../../config/database');
module.exports = (app) => {

    app.get('/color', (req, res) => {

        let consulta = "SELECT id, nombre, rojo, verde, azul FROM color";

        conn.query(consulta, (err, rows) => {
            if (err) {  
                res.json({status: 0, message: "Error",datos:[]});
            }
            else { 
                res.json({status: 1, message: "Exitoso", datos: rows});
            }
        });

    });


    app.post('/color', (req, res, next) => {

        let consulta = `INSERT INTO color (nombre, rojo, verde, azul) VALUES ('${req.body.nombre}','${req.body.rojo}','${req.body.verde}','${req.body.azul}')`;
        console.log(consulta);
        conn.query(consulta, (err, rows, cols) => {
            if (err) {
                console.log(err);
                res.json({status: 0, message: "Error",datos:[]});
            }
            else { 
                res.json({status: 1, message: "Exitoso",datos:[]});
            }
        });

    });



    
}