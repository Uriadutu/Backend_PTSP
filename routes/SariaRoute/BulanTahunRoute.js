import express from "express";
import {
  createBulanTahun,
  getBulanTahun,
  getBulanTahunById,
  updateBulanTahun,
  deleteBulanTahun,
  getBulanTahunByNo,
} from "../../controllers/Saria/BulanTahun.js";

const router = express.Router();

router.post("/bulantahun", createBulanTahun);
router.get("/bulantahun", getBulanTahun);
router.get("/bulantahun/:id", getBulanTahunById);
router.get("/bulantahun/nomor/:no", getBulanTahunByNo);
router.patch("/bulantahun/:id", updateBulanTahun);
router.delete("/bulantahun/:id", deleteBulanTahun);

export default router;
