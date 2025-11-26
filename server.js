const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const userRoutes = require("./routes/userRoutes");

const app = express();
const PORT = 3000;


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static(path.join(__dirname, "public")));


app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "login.html"));
});


app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
