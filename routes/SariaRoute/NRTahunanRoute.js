import express from "express";
import {
  createNrTahunan,
  getAllNrTahunan,
  getNrTahunanById,
  updateNrTahunan,
  deleteNrTahunan,
} from "../../controllers/Saria/NRTahunan.js";

const router = express.Router();

router.post("/nr-tahunan", createNrTahunan);
router.get("/nr-tahunan", getAllNrTahunan);
router.get("/nr-tahunan/:id", getNrTahunanById);
router.put("/nr-tahunan/:id", updateNrTahunan);
router.delete("/nr-tahunan/:id", deleteNrTahunan);

export default router;
