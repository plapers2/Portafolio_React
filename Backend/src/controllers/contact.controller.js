import { contactModel } from "../models/contact.model.js";

export const getContact = async (req, res) => {
  try {
    const results = await contactModel.getAll();
    res.json({ Status: "success", results });
  } catch (error) {
    res.status(500).json({
      error: "error al listar contacto" + error,
    });
  }
};
export const putContact = async (req, res) => {
  try {
    const results = await contactModel.update(req.params.id, req.body);
    res.json({ Status: "success", results });
  } catch (error) {
    res.status(500).json({
      error: "error al actualizar contacto" + error,
    });
  }
};
