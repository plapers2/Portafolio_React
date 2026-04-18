import cnx from "../../config/db.js";

export const contactModel = {
  getAll: async function () {
    const sql = "SELECT * FROM contacts";
    const [rows] = await cnx.query(sql);
    return rows;
  },
};
