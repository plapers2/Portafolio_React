import MySQL from "mysql2/promise";
import "dotenv/config";
let cnx;
try {
  cnx = MySQL.createPool({
    host: process.env.HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_BASE,
    port: process.env.DB_PORT,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  });
} catch (error) {
  console.log(`Ah ocurrido un error en la cnx: ${error.message}`);
}
export default cnx;
