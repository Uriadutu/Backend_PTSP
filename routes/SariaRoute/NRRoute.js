import express from "express";
import {
  createNikahRujuk,
  getNikahRujuk,
  getNikahRujukById,
  updateNikahRujuk,
  deleteNikahRujuk,
} from "../../controllers/Saria/NR.js";

const router = express.Router();

router.post("/nikahrujuk", createNikahRujuk);
router.get("/nikahrujuk", getNikahRujuk);
router.get("/nikahrujuk/:id", getNikahRujukById);
router.patch("/nikahrujuk/:id", updateNikahRujuk);
router.delete("/nikahrujuk/:id", deleteNikahRujuk);

export default router;
