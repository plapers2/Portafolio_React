import { Router } from "express";
import * as contactCtr from "../controllers/contact.controller.js";
const router = Router();
router.get("/contacts", contactCtr.getContact);
export default router;
