import GuruPak from "../../models/PaludiModels/GuruPakModels.js";
// Get all GuruPak
export const getAllGuruPak = async (req, res) => {
  try {
    const guruPak = await GuruPak.findAll();
    res.status(200).json(guruPak);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Get GuruPak by ID
export const getGuruPakById = async (req, res) => {
  try {
    const guruPak = await GuruPak.findOne({ where: { id: req.params.id } });
    if (!guruPak) return res.status(404).json({ msg: "GuruPak not found" });
    res.status(200).json(guruPak);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getGuruPakBySekolah = async (req, res) => {
  try {
    const guruPak = await GuruPak.findAll({ where: { id_sekolah: req.params.id } });
    if (!guruPak) return res.status(404).json({ msg: "GuruPak not found" });
    res.status(200).json(guruPak);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Create GuruPak
export const createGuruPak = async (req, res) => {
  const {
    id_sekolah,
    status_pegawai,
    kategori_guru,
    jenis_guru,
    nama_guru,
    nip_guru,
    pangkat_gol,
    jabatan,
    tgl_mulai_kerja,
    tempat_lahir,
    tanggal_lahir,
    jenis_kelamin,
    pendidikan_terakhir,
    jurusan,
    tahun_lulus,
    no_telp,
    email,
  } = req.body;
  try {
    await GuruPak.create({
      id_sekolah,
      status_pegawai,
      kategori_guru,
      jenis_guru,
      nama_guru,
      nip_guru,
      pangkat_gol,
      jabatan,
      tgl_mulai_kerja,
      tempat_lahir,
      tanggal_lahir,
      jenis_kelamin,
      pendidikan_terakhir,
      jurusan,
      tahun_lulus,
      no_telp,
      email,
    });
    res.status(201).json({ msg: "GuruPak created successfully" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
    console.log(error);
  }
};

// Update GuruPak
export const updateGuruPak = async (req, res) => {
  const {
    id_sekolah,
    status_pegawai,
    kategori_guru,
    jenis_guru,
    nama_guru,
    nip_guru,
    pangkat_gol,
    jabatan,
    tgl_mulai_kerja,
    tempat_lahir,
    tanggal_lahir,
    jenis_kelamin,
    pendidikan_terakhir,
    jurusan,
    tahun_lulus,
    no_telp,
    email,
  } = req.body;
  try {
    const guruPak = await GuruPak.findOne({ where: { id: req.params.id } });
    if (!guruPak) return res.status(404).json({ msg: "GuruPak not found" });
    await GuruPak.update(
      {
        id_sekolah,
        status_pegawai,
        kategori_guru,
        jenis_guru,
        nama_guru,
        nip_guru,
        pangkat_gol,
        jabatan,
        tgl_mulai_kerja,
        tempat_lahir,
        tanggal_lahir,
        jenis_kelamin,
        pendidikan_terakhir,
        jurusan,
        tahun_lulus,
        no_telp,
        email,
      },
      { where: { id: req.params.id } }
    );
    res.status(200).json({ msg: "GuruPak updated successfully" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Delete GuruPak
export const deleteGuruPak = async (req, res) => {
  try {
    const guruPak = await GuruPak.findOne({ where: { id: req.params.id } });
    if (!guruPak) return res.status(404).json({ msg: "GuruPak not found" });
    await GuruPak.destroy({ where: { id: req.params.id } });
    res.status(200).json({ msg: "GuruPak deleted successfully" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
