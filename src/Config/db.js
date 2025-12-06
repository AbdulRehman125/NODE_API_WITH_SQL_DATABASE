const mysql = require("mysql2/promise"); // ✅ promise based

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "ecommerce"
});

module.exports = db ;




// const dotenv = require("dotenv");
// dotenv.config();
// const mysql = require("mysql2/promise");

// const db = mysql.createPool({
//   host: process.env.DB_HOST || "localhost",
//   user: process.env.DB_USER || "root",
//   password: process.env.DB_PASSWORD || "",
//   database: process.env.DB_NAME || "ecommerce",
// });

// module.exports = { db };





// const mysql = require("mysql2/promise"); // ✅ promise based
// require("dotenv").config();

// const connectDb = async () => {
//   try {
//     const connection = await mysql.createConnection({
//       host: process.env.DB_HOST || "localhost",
//       user: process.env.DB_USER || "root",
//       password: process.env.DB_PASSWORD || "",
//       database: process.env.DB_NAME || "ecommerce"
//     });
//     console.log("✅ MySQL Connected!");
//     return connection;
//   } catch (error) {
//     console.error("❌ DB Connection Error:", error.message);
//     process.exit(1);
//   }
// };

// module.exports = { connectDb };
