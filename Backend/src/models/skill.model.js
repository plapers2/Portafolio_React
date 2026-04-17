import cnx from "../../config/db.js";

export const skillModel = {
  getAll: async function () {
    const sql = "SELECT * FROM skills";
    const [rows] = await cnx.query(sql);
    return [rows];
  },
};
