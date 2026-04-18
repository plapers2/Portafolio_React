import { skillModel } from "../models/skill.model.js";

export const getSkill = async (req, res) => {
  try {
    const results = await skillModel.getAll();
    res.json({ Status: "success", results });
  } catch (error) {
    res.status(500).json({
      error: "error al listar skills",
    });
  }
};
