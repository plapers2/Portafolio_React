import express from "express";
import cors from "cors";
//* Importar rutas
import contactRoutes from "./src/routes/contact.route.js";
// Instancia global
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

//* Rutas
app.use("/api", contactRoutes);

export default app;
