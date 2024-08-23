import Sekolah from "../../models/DisaModels/SekolahModels.js";
import TenagaPendidik from "../../models/DisaModels/TenagaPendidikModels.js";

export const getTenaga = async (req, res) => {
  try {
    const tenaga = await TenagaPendidik.findAll({
      include: [
        {
          model: Sekolah,
        },
      ],
    });
    res.status(200).json(tenaga);
  } catch (error) {
    res.status(404).json({ msg: "Tidak ada tenaga" });
  }
};

export const getTenagabyId = async (req, res) => {
  try {
    const tenaga = await TenagaPendidik.findOne({
      where: {
        id: req.params.id,
      },
      include: [
        {
          model: Sekolah,
        },
      ],
    });
    res.status(200).json(tenaga);
  } catch (error) {
    res.status(404).json({ msg: "Tidak ada tenaga" });
  }
};
export const getTenagabySekolah = async (req, res) => {
  try {
    const tenaga = await TenagaPendidik.findAll({
      where: {
        id_sekolah: req.params.id,
      },
      include: [
        {
          model: Sekolah,
        },
      ],
    });
    res.status(200).json(tenaga);
  } catch (error) {
    res.status(404).json({ msg: "Tidak ada tenaga" });
  }
};

export const createTenaga = async (req, res) => {
  const {
    id_sekolah,
    NIP,
    nama_tenaga,
    status_pegawai,
    pangkat,
    jabatan,
    tgl_mulai,
    tempat_lahir,
    tanggal_lahir,
    jenis_kelamin,
    agama,
    pendidikan_terakhir,
    juruan,
    tahun_lulus,
    no_telp,
    email,
  } = req.body;
  try {
    await TenagaPendidik.create({
      id_sekolah,
      NIP,
      nama_tenaga,
      status_pegawai,
      pangkat,
      jabatan,
      tgl_mulai,
      tempat_lahir,
      tanggal_lahir,
      jenis_kelamin,
      agama,
      pendidikan_terakhir,
      juruan,
      tahun_lulus,
      no_telp,
      email,
    });
    res.status(201).json({ msg: "Data tenaga berhasil ditambahkan" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: error.message });
  }
};

export const updateTenaga = async (req, res) => {
  try {
    const tenaga = await TenagaPendidik.findOne({
      where: {
        id: req.params.id,
      },
    });
    await tenaga.update(req.body);

    res.status(200).json({ msg: "sukses" });
  } catch (error) {
    console.log(error);
  }
};

export const deleteTenaga = async (req, res) => {
  try {
    const tenaga = await TenagaPendidik.findOne({
      where: {
        id: req.params.id,
      },
    });
    console.log(tenaga.id, "ID TENAGA");
    
    if (!tenaga) {
      res.status(404).json({ msg: "Data Tidak DItemukan" });
    }
    await tenaga.destroy();
    res.status(200).json({ msg: "sukses dihapus" });
  } catch (error) {
    res.status(500).json({ msg: "Gagal Menghapus" });
    console.log(error);
    
  }
};
