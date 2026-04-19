import cnx from "../../config/db.js";

export const projectModel = {
  getAll: async function () {
    const sql = `SELECT 
    projects.id AS project_id,
    projects.name,
    projects.image,
    projects.description,
    projects.link as link,
    skills.id as skill_id,
    skills.technology,
    skills.icon
    FROM projects JOIN projects_has_skills as pivote ON pivote.projects_id = projects.id JOIN skills ON skills.id = pivote.skills_id;`;
    const [rows] = await cnx.query(sql);
    const rowMap = {};
    rows.forEach((row) => {
      if (!rowMap[row.project_id]) {
        rowMap[row.project_id] = {
          id: row.project_id,
          name: row.name,
          image: row.image,
          description: row.description,
          link: row.link,
          tags: [],
        };
      }
      rowMap[row.project_id].tags.push({
        id: row.skill_id,
        name: row.technology,
        icon: row.icon,
      });
    });
    return Object.values(rowMap);
  },
  update: async function (id, datos) {
    const sql = "UPDATE projects SET ? WHERE id = ?";
    const [rows] = await cnx.query(sql, [datos, id]);
    return rows;
  },
};
