import express from "express";
import {
  getTenagaKristen,
  getTenagaKristenbyId,
  getTenagaKristenbySekolah,
  createTenagaKristen,
  updateTenagaKristen,
  deleteTenagaKristen,
} from "../../controllers/Paludi/TenagaPendidikKristen.js";

const router = express.Router();

router.get("/tenagakristen", getTenagaKristen);
router.get("/tenagakristen/:id", getTenagaKristenbyId);
router.get("/tenagakristen/sekolah/:id", getTenagaKristenbySekolah);
router.post("/tenagakristen", createTenagaKristen);
router.put("/tenagakristen/:id", updateTenagaKristen);
router.delete("/tenagakristen/:id", deleteTenagaKristen);
export default router;
