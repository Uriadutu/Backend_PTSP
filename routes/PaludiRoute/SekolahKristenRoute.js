import express from "express";
import {
  getSekolahKristens,
  getSekolahKristenById,
  createSekolahKristen,
  updateSekolahKristen,
  deleteSekolahKristen,
} from "../../controllers/Paludi/SekolahKristen.js";

const router = express.Router();

router.get("/sekolah-kristen", getSekolahKristens);
router.get("/sekolah-kristen/:id", getSekolahKristenById);
router.post("/sekolah-kristen", createSekolahKristen);
router.patch("/sekolah-kristen/:id", updateSekolahKristen);
router.delete("/sekolah-kristen/:id", deleteSekolahKristen);

export default router;
