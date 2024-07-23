import HakAkses from "../models/HakAksesModel.js";
import argon2 from "argon2";
import Pegawai from "../models/LapasiModels/PegawaiModels.js";

export const createHakAkses = async (req, res) => {
  const { id_pegawai } = req.body;
  try {
    await HakAkses.create({
      id_pegawai: id_pegawai,
      lapasi: false,
      pantai_disa: false,
      saria: false,
      akesahu: false,
      sahu: false,
      paludi: false,
    });
    res.status(200).json({ msg: "Berhasil" });
  } catch (error) {
    res.status(400).json({ msg: "gagal" });
  }
};
export const updateHakAkses = async (req, res) => {
  const { id } = req.params;
  const { password, lapasi, pantai_disa, aksesahu, saria, paludi, sahu } =
    req.body;

  try {
    const hashedPassword = await argon2.hash(password);
    const pegawai = await Pegawai.findOne({
      where: req.params.id,
    });

    await pegawai.update({
      password: hashedPassword,
    });

    await HakAkses.update(
      {
        lapasi,
        pantai_disa,
        aksesahu,
        saria,
        paludi,
        sahu,
      },
      { where: { id_pegawai: id } }
    );

    res.status(200).json({ msg: "Hak akses updated successfully" });
  } catch (error) {
    console.error("Failed to update hak akses:", error);
    res.status(500).json({ msg: "Failed to update hak akses" });
  }
};
