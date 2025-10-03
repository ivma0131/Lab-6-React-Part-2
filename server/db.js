// server/db.js
import mysql from "mysql2";

const connection = mysql.createConnection({
  host: "database-1.cdw6ge5dlp5u.us-east-1.rds.amazonaws.com",
  user: "admin",
  password: "Timndbpw10!",   // your lab password
  database: "ivandb",        // replace with YOUR firstname+db
  port: 3306
});

connection.connect((err) => {
  if (err) {
    console.error("❌ Database connection failed: " + err.stack);
    return;
  }
  console.log("✅ Connected to MySQL database.");
});

export default connection;
