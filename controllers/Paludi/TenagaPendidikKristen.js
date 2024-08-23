import SekolahKristen from "../../models/PaludiModels/SekolahKristenModel.js";
import TenagaPendidikKristen from "../../models/PaludiModels/TenagaPendidikKristenModels.js";

export const getTenagaKristen = async (req, res) => {
  try {
    const tenaga = await TenagaPendidikKristen.findAll({
      include: [
        {
          model: SekolahKristen,
        },
      ],
    });
    res.status(200).json(tenaga);
  } catch (error) {
    res.status(404).json({ msg: "Tidak ada tenaga" });
  }
};

export const getTenagaKristenbyId = async (req, res) => {
  try {
    const tenaga = await TenagaPendidikKristen.findOne({
      where: {
        id: req.params.id,
      },
      include: [
        {
          model: SekolahKristen,
        },
      ],
    });
    res.status(200).json(tenaga);
  } catch (error) {
    res.status(404).json({ msg: "Tidak ada tenaga" });
  }
};
export const getTenagaKristenbySekolah = async (req, res) => {
  try {
    const tenaga = await TenagaPendidikKristen.findAll({
      where: {
        id_sekolah: req.params.id,
      },
      include: [
        {
          model: SekolahKristen,
        },
      ],
    });
    res.status(200).json(tenaga);
  } catch (error) {
    res.status(404).json({ msg: "Tidak ada tenaga" });
  }
};

export const createTenagaKristen = async (req, res) => {
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
    await TenagaPendidikKristen.create({
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

export const updateTenagaKristen = async (req, res) => {
  try {
    const tenaga = await TenagaPendidikKristen.findOne({
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

export const deleteTenagaKristen = async (req, res) => {
  try {
    const tenaga = await TenagaPendidikKristen.findOne({
        where : {
            id : req.params.id
        }
    })
    if (!tenaga) {
        res.status(404).json({ msg: "Data Tidak DItemukan" });
    }
    await tenaga.destroy()
    res.status(200).json({ msg: "sukses dihapus" });
} catch (error) {
    res.status(500).json({ msg: "Gagal Menghapus" });
}
};
