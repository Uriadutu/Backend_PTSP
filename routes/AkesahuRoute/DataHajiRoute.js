import {
  getHajibyId,
  getHaji,
  createHaji,
  updateHaji,
  deleteHaji,
  getHajibyPorsi,
  berangkatHaji,
} from "../../controllers/Akesahu/DataHaji.js";
import express from "express"
const router = express.Router();

router.get("/haji", getHaji);
router.get("/haji/:id", getHajibyId);
router.get("/haji/porsi/:porsi", getHajibyPorsi);
router.patch("/haji/berangkat/:id", berangkatHaji);
router.post("/haji", createHaji);
router.patch("/haji/:id", updateHaji);
router.delete("/haji/:id", deleteHaji);

export default router