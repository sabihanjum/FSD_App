import mysql from 'mysql2/promise';

// Create a connection pool
const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Root",
    database: "nextjs_app",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

export default pool;
