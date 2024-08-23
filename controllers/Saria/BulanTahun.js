// import BulanTahun from "../models/BulanTahunModel.js"; // Pastikan path ini sesuai dengan lokasi file model
import BulanTahun from "../../models/SariaModels/BulanTahunModels.js";

// CREATE: Tambah data BulanTahun
export const createBulanTahun = async (req, res) => {
  try {
    const { nama_bulan, no } = req.body;

    if (!nama_bulan) {
      return res.status(400).json({ message: "Nama bulan tidak boleh kosong" });
    }

    const id = `${nama_bulan}${no}`;

    // Cek apakah BulanTahun dengan ID yang sama sudah ada
    const bulanAda = await BulanTahun.findOne({
      where: {
        id: id,
      },
    });

    if (bulanAda) {
      console.error(`BulanTahun dengan ID ${id} sudah ada.`);
      return res
        .status(400)
        .json({ msg: `${nama_bulan} Sudah ada` });
    }

    // Jika belum ada, buat data BulanTahun baru
    const bulanTahun = await BulanTahun.create({
      id: id,
      nama_bulan,
      no,
    });

    res.status(201).json(bulanTahun);
  } catch (error) {
    console.error("Error creating BulanTahun:", error.message);
    res.status(400).json({ message: error.message });
  }
};

// READ: Ambil semua data BulanTahun
export const getBulanTahun = async (req, res) => {
  try {
    const bulanTahun = await BulanTahun.findAll();
    res.status(200).json(bulanTahun);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// READ: Ambil data BulanTahun berdasarkan ID
export const getBulanTahunById = async (req, res) => {
  try {
    const bulanTahun = await BulanTahun.findOne({
      where: { id: req.params.id },
    });
    if (!bulanTahun)
      return res.status(404).json({ message: "Data tidak ditemukan" });
    res.status(200).json(bulanTahun);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getBulanTahunByNo = async (req, res) => {
  try {
    const bulanTahun = await BulanTahun.findAll({
      where: { no: req.params.no },
    });
    if (!bulanTahun)
      return res.status(404).json({ message: "Data tidak ditemukan" });
    res.status(200).json(bulanTahun);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE: Perbarui data BulanTahun berdasarkan ID
export const updateBulanTahun = async (req, res) => {
  try {
    const { nama_bulan } = req.body;
    const [updated] = await BulanTahun.update(
      { nama_bulan },
      {
        where: { id: req.params.id },
      }
    );
    if (updated === 0)
      return res.status(404).json({ message: "Data tidak ditemukan" });
    res.status(200).json({ message: "Data berhasil diperbarui" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// DELETE: Hapus data BulanTahun berdasarkan ID
export const deleteBulanTahun = async (req, res) => {
  try {
    const deleted = await BulanTahun.destroy({
      where: { id: req.params.id },
    });
    if (deleted === 0)
      return res.status(404).json({ message: "Data tidak ditemukan" });
    res.status(200).json({ message: "Data berhasil dihapus" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
