const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const { notFound } = require("./middlewares/notFound");
const { errorHandler } = require("./middlewares/errorHandler");

const apiRoutes = require("./routes"); // va a apuntar a src/routes/index.js

const app = express();

// 1) Middlewares globales (se ejecutan para todas las requests)
app.use(cors());
app.use(express.json()); // para leer JSON del body
app.use(morgan("dev"));

// 2) Rutas
app.use("/api", apiRoutes);

// 3) 404 (si ninguna ruta coincidió)
app.use(notFound);

// 4) Handler de errores (si alguien hace throw o next(err))
app.use(errorHandler);

module.exports = app;