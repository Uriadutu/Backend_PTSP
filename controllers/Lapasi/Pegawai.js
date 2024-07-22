import Pegawai from "../../models/LapasiModels/PegawaiModels.js";

export const getPegawai = async (req, res) => {
  try {
    const pegawai = await Pegawai.findAll();
    res.status(200).json(pegawai);
  } catch (error) {
    res.status(404).json({ msg: "Tidak ada pegawai" });
  }
};

export const getPegawaiById = async (req, res) => {
  try {
    const pegawai = await Pegawai.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(pegawai);
  } catch (error) {
    res.status(404).json({ msg: "Tidak ada pegawai" });
  }
};

export const createPegawai = async (req, res) => {
  const {
    NIP,
    jenis_pegawai,
    nama_pegawai,
    pangkat_gol,
    jabatan,
    tmt_terakhir,
    tmt_pengangkatan,
    tmt_pensiun,
    pend_terakhir,
    jurusan,
    tahun_lulus,
    jenis_kelamin,
    temp_lahir,
    tgl_lahir,
    agama,
    satuan_kerja,
  } = req.body;

  try {
    await Pegawai.create({
      NIP: NIP,
      jenis_pegawai: jenis_pegawai,
      nama_pegawai: nama_pegawai,
      pangkat_gol: pangkat_gol,
      jabatan: jabatan,
      tmt_terakhir: tmt_terakhir,
      tmt_pengangkatan: tmt_pengangkatan,
      tmt_pensiun: tmt_pensiun,
      pend_terakhir: pend_terakhir,
      jurusan: jurusan,
      tahun_lulus: tahun_lulus,
      jenis_kelamin: jenis_kelamin,
      temp_lahir: temp_lahir,
      tgl_lahir: tgl_lahir,
      agama: agama,
      satuan_kerja: satuan_kerja,
    });
    res.status(201).json({ msg: "Pegawai ditambahkan" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
    console.log(error.message);
  }
};

export const updatePegawai = async (req, res) => {
  try {
    const pegawai = await Pegawai.findOne({
      where: {
        id: req.params.id,
      },
    });
    pegawai.NIP = req.body.NIP;
    pegawai.jenis_pegawai = req.body.jenis_pegawai;
    pegawai.nama_pegawai = req.body.nama_pegawai;
    pegawai.pangkat_gol = req.body.pangkat_gol;
    pegawai.jabatan = req.body.jabatan;
    pegawai.tmt_terakhir = req.body.tmt_terakhir;
    pegawai.tmt_pengangkatan = req.body.tmt_pengangkatan;
    pegawai.tmt_pensiun = req.body.tmt_pensiun;
    pegawai.pend_terakhir = req.body.pend_terakhir;
    pegawai.jurusan = req.body.jurusan;
    pegawai.tahun_lulus = req.body.tahun_lulus;
    pegawai.jenis_kelamin = req.body.jenis_kelamin;
    pegawai.temp_lahir = req.body.temp_lahir;
    pegawai.tgl_lahir = req.body.tgl_lahir;
    pegawai.agama = req.body.agama;
    pegawai.satuan_kerja = req.body.satuan_kerja;
    await pegawai.update();
    res.status(200).json({ msg: "Pegawai diperbarui" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const deletePegawai = async (req, res) => {
  try {
    await Pegawai.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Pegawai dihapus" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
