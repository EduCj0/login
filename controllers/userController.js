const db = require("../models/db");
const bcrypt = require("bcryptjs");

// Registrar usuario
exports.register = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password)
    return res.status(400).json({ message: "Faltan datos." });

  const hashedPassword = await bcrypt.hash(password, 10);
  const query = "INSERT INTO usuarios (username, password) VALUES (?, ?)";

  db.query(query, [username, hashedPassword], (err) => {
    if (err) return res.status(500).json({ message: "Error al registrar." });
    res.json({ message: "Usuario registrado correctamente." });
  });
};

// Iniciar sesión
exports.login = (req, res) => {
  const { username, password } = req.body;

  const query = "SELECT * FROM usuarios WHERE username = ?";
  db.query(query, [username], async (err, results) => {
    if (err) return res.status(500).json({ message: "Error en el servidor." });
    if (results.length === 0)
      return res.status(404).json({ message: "Usuario no encontrado." });

    const user = results[0];
    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword)
      return res.status(401).json({ message: "Contraseña incorrecta." });

    res.json({ message: "Inicio de sesión exitoso." });
  });
};
