import express from "express";
import {
  getAllOrganisasi,
  getOrganisasiById,
  createOrganisasi,
  updateOrganisasi,
  deleteOrganisasi,
} from "../../controllers/Paludi/OrganisasiKristen.js";

const router = express.Router();

router.get("/organisasi", getAllOrganisasi);
router.get("/organisasi/:id", getOrganisasiById);
router.post("/organisasi", createOrganisasi);
router.patch("/organisasi/:id", updateOrganisasi);
router.delete("/organisasi/:id", deleteOrganisasi);

export default router;
