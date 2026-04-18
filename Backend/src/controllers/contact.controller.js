import { contactModel } from "../models/contact.model.js";

export const getContact = async (req, res) => {
  try {
    const results = await contactModel.getAll();
    res.json({ Status: "success", results });
  } catch (error) {
    res.status(500).json({
      error: "error al listar contacto",
    });
  }
};
