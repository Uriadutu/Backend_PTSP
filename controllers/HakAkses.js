import HakAkses from "../models/HakAksesModel.js";

export const createHakAkses = async(req, res) => {
    const {User, Lapasi, PantaiDisa, Saria, Akesahu, Sahu, Paludi, LayananPengaduan} = req.body
    try {
        await HakAkses.create({
            User : User,
            lapasi : Lapasi,
            pantai_disa : PantaiDisa,
            saria : Saria,
            akesahu : Akesahu,
            sahu : Sahu,
            paludi : Paludi,
            layanan_pengaduan : LayananPengaduan
        })
        res.status(200).json({msg : "Berhasil"})
    } catch (error) {
        res.status(400).json({ msg: "gagal" });        
    }
}