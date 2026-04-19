import { Router } from "express";
import * as contactCtr from "../controllers/contact.controller.js";
const router = Router();
router.get("/contacts", contactCtr.getContact);
router.put("/contacts/update/:id", contactCtr.putContact);
export default router;
