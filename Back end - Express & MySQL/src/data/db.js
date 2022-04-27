const mysql = require('mysql2/promise')

const db = mysql.createPool({
    host: '',
    user: '',
    password: '',
    database: '',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})


module.exports = db