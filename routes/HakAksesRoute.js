import express from "express";
import { createHakAkses, updateHakAkses } from "../controllers/HakAkses.js";

const Router = express.Router();

Router.post("/hakakses", createHakAkses);
Router.patch("/hakakses/pegawai/:id", updateHakAkses);

export default Router;
