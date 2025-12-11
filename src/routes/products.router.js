import { Router } from "express";

const router = Router();

import { index } from "../controllers/products.controller.js";

router.get("/", index);

export default router;