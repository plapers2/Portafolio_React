import cnx from "../../config/db.js";

export const skillModel = {
  getAll: async function () {
    const sql = "SELECT * FROM skills";
    const [rows] = await cnx.query(sql);
    return rows;
  },
  update: async function (id, datos) {
    const sql = "UPDATE skills SET ? WHERE id = ?";
    const [rows] = await cnx.query(sql, [datos, id]);
    return rows;
  },
};
