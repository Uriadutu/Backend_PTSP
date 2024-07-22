import Haji from "../../models/AkesahuModels/DataHajiModels.js";
// Mendapatkan semua data Haji
export const getHaji = async (req, res) => {
  try {
    const response = await Haji.findAll();
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ msg: "Data Haji tidak ditemukan" });
  }
};

// Mendapatkan data Haji berdasarkan ID
export const getHajibyId = async (req, res) => {
  try {
    const response = await Haji.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ msg: "Data Haji tidak ditemukan" });
  }
};

export const getHajibyPorsi = async (req, res) => {
  try {
    const response = await Haji.findOne({
      where: {
        nomor_porsi: req.params.porsi,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ msg: "Data Haji tidak ditemukan" });
  }
};

// Membuat data Haji baru
export const createHaji = async (req, res) => {
  const {
    nomor_porsi,
    tanggal_porsi,
    nama_jamaah,
    jenis_kelamin,
    pekerjaan,
    tempat_lahir,
    tanggal_lahir,
    nama_desa,
    kecamatan,
    bank,
    status_keberangkatan,
    tgl_berangkat,
  } = req.body;

  try {
    await Haji.create({
      id : nomor_porsi,
      nomor_porsi,
      tanggal_porsi,
      nama_jamaah,
      jenis_kelamin,
      pekerjaan,
      tempat_lahir,
      tanggal_lahir,
      nama_desa,
      kecamatan,
      bank,
      status_keberangkatan: "-",
      tgl_berangkat: "-",
    });
    res.status(200).json({ msg: "Data Haji berhasil ditambah" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "Data Haji gagal ditambah" });
  }
};

// Mengupdate data Haji berdasarkan ID
export const updateHaji = async (req, res) => {
  const {
    nomor_porsi,
    tanggal_porsi,
    nama_jamaah,
    jenis_kelamin,
    pekerjaan,
    tempat_lahir,
    tanggal_lahir,
    nama_desa,
    kecamatan,
    bank,
    status_keberangkatan,
    tgl_berangkat,
  } = req.body;

  try {
    const haji = await Haji.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!haji) {
      return res.status(404).json({ msg: "Data Haji tidak ditemukan" });
    }

    await haji.update({
      nomor_porsi,
      tanggal_porsi,
      nama_jamaah,
      jenis_kelamin,
      pekerjaan,
      tempat_lahir,
      tanggal_lahir,
      nama_desa,
      kecamatan,
      bank,
      status_keberangkatan,
      tgl_berangkat,
    });

    res.status(200).json({ msg: "Data Haji berhasil diupdate" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "Data Haji gagal diupdate" });
  }
};

export const berangkatHaji = async (req, res) => {
  const {tgl_berangkat, status_keberangkatan} = req.body
  try {
    const berangkat = await Haji.findOne({
      where : {
        nomor_porsi: req.params.id
      }
    })
    if(!berangkat) {
      return res.status(404).json({ msg: "Data Haji tidak ditemukan" });
    }
    await berangkat.update({
      status_keberangkatan : status_keberangkatan,
      tgl_berangkat : tgl_berangkat
    })
    res.status(200).json({ msg: "Data Berhasil Diupdate" });
  } catch (error) {
    
  }
}
// Menghapus data Haji berdasarkan ID
export const deleteHaji = async (req, res) => {
  try {
    const haji = await Haji.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!haji) {
      return res.status(404).json({ msg: "Data Haji tidak ditemukan" });
    }

    await haji.destroy();
    res.status(200).json({ msg: "Data Haji berhasil dihapus" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "Data Haji gagal dihapus" });
  }
};
