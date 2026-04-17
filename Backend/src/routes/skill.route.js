import { Router } from "express";
import * as skillCtr from "../controllers/skill.controller.js";
const router = Router();
router.get("/skills", skillCtr.getSkill);
export default router;
