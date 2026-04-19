import cnx from "../../config/db.js";

export const contactModel = {
  getAll: async function () {
    const sql = "SELECT * FROM contacts";
    const [rows] = await cnx.query(sql);
    return rows;
  },
  update: async function (id, datos) {
    const sql = "UPDATE contact SET ? WHERE id = ?";
    const [rows] = await cnx.query(sql, [datos, id]);
    return rows;
  },
};
