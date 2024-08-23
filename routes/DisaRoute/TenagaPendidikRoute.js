import express from "express";
import {
  getTenaga,
  getTenagabyId,
  getTenagabySekolah,
  createTenaga,
  updateTenaga,
  deleteTenaga
} from "../../controllers/Disa/TenagaPendidik.js";

const router = express.Router();

router.get("/tenaga", getTenaga);
router.get("/tenaga/:id", getTenagabyId);
router.get("/tenaga/sekolah/:id", getTenagabySekolah);
router.post("/tenaga", createTenaga);
router.patch("/tenaga/:id", updateTenaga);
router.delete("/tenaga/:id", deleteTenaga);
export default router;
