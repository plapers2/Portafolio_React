import { Router } from "express";
import * as projectCtr from "../controllers/project.controller.js";
const router = Router();
router.get("/projects", projectCtr.getProject);
router.put("/projects/update/:id", projectCtr.putProject);
export default router;
