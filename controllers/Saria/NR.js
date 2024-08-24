import NikahRujuk from "../../models/SariaModels/NRModels.js";

// CREATE: Tambah data NikahRujuk
export const createNikahRujuk = async (req, res) => {
  try {
    await NikahRujuk.create(req.body);
    res.status(201).json({ message: "Data Berhasil Ditambahkan" });
  } catch (error) {
    res.status(400).json({ message: error.message });
    console.log(error);
    
  }
};

// READ: Ambil semua data NikahRujuk
export const getNikahRujuk = async (req, res) => {
  try {
    const response = await NikahRujuk.findAll();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// READ: Ambil data NikahRujuk berdasarkan ID
export const getNikahRujukById = async (req, res) => {
  try {
    const response = await NikahRujuk.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (!response)
      return res.status(404).json({ message: "Data Tidak Ditemukan" });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getNikahRujukByNamaBulan = async (req, res) => {
  try {
    const response = await NikahRujuk.findAll({
      where: {
        namaBulan: req.params.bulan,
      },
    });
    if (!response)
      return res.status(404).json({ message: "Data Tidak Ditemukan" });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE: Perbarui data NikahRujuk berdasarkan ID
export const updateNikahRujuk = async (req, res) => {
  try {
    const response = await NikahRujuk.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (response[0] === 0)
      return res.status(404).json({ message: "Data Tidak Ditemukan" });
    res.status(200).json({ message: "Data Berhasil Diperbarui" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// DELETE: Hapus data NikahRujuk berdasarkan ID
export const deleteNikahRujuk = async (req, res) => {
  try {
    const response = await NikahRujuk.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!response)
      return res.status(404).json({ message: "Data Tidak Ditemukan" });
    res.status(200).json({ message: "Data Berhasil Dihapus" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
