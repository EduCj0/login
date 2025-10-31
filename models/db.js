const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root", // cambia si tu usuario es otro
  password: "root", // agrega tu contraseña si tiene
  database: "login" // nombre de tu base de datos en HeidiSQL
});

connection.connect((err) => {
  if (err) {
    console.error("❌ Error al conectar a la base de datos:", err);
  } else {
    console.log("✅ Conectado a la base de datos MySQL");
  }
});

module.exports = connection;
