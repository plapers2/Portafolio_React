import express from "express";
import cors from "cors";
//* Importar rutas
import contactRoutes from "./src/routes/contact.route.js";
import projectsRoutes from "./src/routes/project.route.js";
import skillsRoutes from "./src/routes/skill.route.js";
// Instancia global
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

//* Rutas
app.use("/api", contactRoutes);
app.use("/api", projectsRoutes);
app.use("/api", skillsRoutes);

export default app;
