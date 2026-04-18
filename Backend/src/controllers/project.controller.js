import { projectModel } from "../models/project.model.js";

export const getProject = async (req, res) => {
  try {
    const results = await projectModel.getAll();
    res.json({ Status: "success", results });
  } catch (error) {
    res.status(500).json({
      error: "error al listar proyectos",
    });
  }
};
