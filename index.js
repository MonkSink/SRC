const mysql = require('mysql');

const pool = mysql.createPool({

    connectionLimit: 10;
    password: 'NigamaShravan7478$',
    user: 'mmaan',
    database: 'minealways',
    host: 'localhost',
    port: '3306'
});

let minealways;

minealways.all = ()=> {

    return new Promise(resolve,reject)=>{ 

        pool.query('SELECT * FROM employee', (err,results)=> {

            if(err) {
                 return reject(err);
                }
                return resolve(results);
        });
    });
};

module.exports = minealways;