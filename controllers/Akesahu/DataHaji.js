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

export const getHajibyTanggal = async (req, res) => {
  try {
    const response = await Haji.findAll({
      where: {
        tgl_berangkat: req.params.tgl,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ msg: "Data Haji tidak ditemukan" });
  }
};

export const getHajiStatusByYear = async (req, res) => {
  try {
    // Query untuk mendapatkan semua data Haji
    const hajis = await Haji.findAll();

    // Mengumpulkan data berdasarkan tahun dan status keberangkatan
    const data = hajis.reduce((acc, haji) => {
      // Mendapatkan tahun dari tgl_berangkat
      const year =
        haji.tahun_berangkat !== "-" ? parseInt(haji.tahun_berangkat) : null;

      // Jika tgl_berangkat atau tahun_berangkat tidak valid, skip data ini
      if (!year) return acc;

      // Inisialisasi data untuk tahun tersebut jika belum ada
      if (!acc[year]) {
        acc[year] = { year, berangkat: 0, batal_berangkat: 0 };
      }

      // Update jumlah berangkat atau batal berangkat berdasarkan status_keberangkatan
      if (haji.status_keberangkatan === "Berangkat") {
        acc[year].berangkat += 1;
      } else if (haji.status_keberangkatan === "Batal Berangkat") {
        acc[year].batal_berangkat += 1;
      }

      return acc;
    }, {});

    // Mengonversi hasil menjadi array
    const result = Object.values(data);

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};


export const getJumlahHajiBerangkat = async (req, res) => {
  try {
    const response = await Haji.findOne({
      where: {
        status_keberangkatan: req.params.berangkat,
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
    tahun_berangkat,
  } = req.body;

  try {
    await Haji.create({
      id: nomor_porsi,
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
      tahun_berangkat: "-",
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
    tahun_berangkat,
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
      tahun_berangkat: tgl_berangkat.silce(0, 4),
    });

    res.status(200).json({ msg: "Data Haji berhasil diupdate" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "Data Haji gagal diupdate" });
  }
};

export const berangkatHaji = async (req, res) => {
  const { tgl_berangkat, status_keberangkatan } = req.body;
  try {
    const berangkat = await Haji.findOne({
      where: {
        nomor_porsi: req.params.id,
      },
    });
    if (!berangkat) {
      return res.status(404).json({ msg: "Data Haji tidak ditemukan" });
    }

    let tahunBerangkat = null;
    let updatedTglBerangkat = tgl_berangkat;

    if (status_keberangkatan === "Batal Berangkat") {
      updatedTglBerangkat = "-";
      tahunBerangkat = "-";
    } else {
      tahunBerangkat = tgl_berangkat ? tgl_berangkat.slice(0, 4) : null;
    }

    await berangkat.update({
      status_keberangkatan,
      tgl_berangkat: updatedTglBerangkat,
      tahun_berangkat: tahunBerangkat,
    });

    res.status(200).json({ msg: "Data Berhasil Diupdate" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};


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
