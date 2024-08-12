import Akademik from "../../models/SidikaModels/PendampinganAkademikModels.js";

export const getAkademik = async (req, res) => {
  try {
    const akademik = await Akademik.findAll();
    res.json(akademik);
  } catch (error) {
    console.log(error);
  }
};
export const getAkademikbyId = async (req, res) => {
  try {
    const akademik = await Akademik.findOne({
      where: {
        id: re1.params.id,
      },
    });
    res.json(akademik);
  } catch (error) {
    console.log(error);
  }
};

export const createAkademik = async (req, res) => {
  const {
    id_pegawai,
    nama_sekolah,
    status_akademik,
    jumlah_peserta,
    keterangan,
  } = req.body;
  try {
    const existingPengawas = await Akademik.findOne({
      where: { id_pegawai },
    });

    if (existingPengawas) {
      return res
        .status(400)
        .json({ msg: `Pengawas dengan NIP ${id_pegawai} sudah ada.` });
    }

    await Akademik.create({
      id_pegawai,
      nama_sekolah,
      status_akademik,
      jumlah_peserta,
      keterangan,
    });

    res.json("berhasil");
  } catch (error) {
    console.log(error);
  }
};

export const deleteAkademik = async (req, res) => {
  try {
    const akademik = await Akademik.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!akademik) {
      return res.status(404).json({ msg: "Akademik not found" });
    }
    await akademik.destroy();
    return res.status(200).json({ msg: "Berhasil Dihapus" });
  } catch (error) {
    return res.status(500).json({ msg: "Akademik Gagal Dihapus" });
  }
};
