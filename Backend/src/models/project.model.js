import cnx from "../../config/db.js";

export const projectModel = {
  getAll: async function () {
    const sql = "SELECT * FROM projects";
    const [rows] = await cnx.query(sql);
    return rows;
  },
};
