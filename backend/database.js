import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// this is for connecting to the database
async function testConnection() {
  try {
    const connection = await pool.getConnection();
    console.log("✅ Database Connected Successfully!");
    connection.release(); // Release connection
  } catch (error) {
    console.error("❌ Database Connection Failed:", error.message);
  }
}

export async function customerFeedback() {
  try {
    const [rows] = await pool.query("SELECT * FROM feedback");
    return rows;
  } catch (error) {
    console.error("Database error:", error);
  }
}

export async function insertFeedback(name, email, message) {
  try {
    const [result] = await pool.query(
      "INSERT INTO feedback (name, email, message) VALUES (?, ?, ?)",
      [name, email, message]
    );
    return result;
  } catch (error) {
    console.error("Database error:", error);
  }
}