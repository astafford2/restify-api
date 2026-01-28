const mysql = require('mysql2');

function mysqlConnection(func) {
    let conn = mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE
        });
        
        conn.connect((err) => {
            if (err) throw err;

            func(conn);
        });
}

module.exports = {
    getAllBins(req, res, next) {
        mysqlConnection((conn) => {
            conn.query(`SELECT * FROM storage_bins ORDER BY bin_name`, (err, result, fields) => {
                if (err) throw err;

                res.json(result);
                next();
            });
        });
    },
    getBinById(req, res, next) {
        bin_id = req.params.id;
        if (bin_id) {
            mysqlConnection((conn) => {
                conn.query(`SELECT * FROM storage_bins WHERE id = ? LIMIT 1`, [bin_id], (err, result, fields) => {
                   if (err) throw err;

                   res.json(result);
                   next();
                });
            });
        }
        else {
            res.send(400, {message: 'Parameter id is required'});
        }
    },
    getBinContents(req, res, next) {
        bin_id = req.params.id;
        if (bin_id) {
            mysqlConnection((conn) => {
                conn.query(`SELECT * FROM storage_bins JOIN bin_contents ON storage_bins.id = bin_id WHERE id = ?`, [bin_id], (err, result, fields) => {
                    if (err) throw err;
                    
                    res.json(result);
                    next();
                });
            });
        }
        else {
            res.send(400, {message: 'Parameter id is required'});
        }
    }
};