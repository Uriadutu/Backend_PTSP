import SekolahKristen from "../../models/PaludiModels/SekolahKristenModel.js";

// Get all SekolahKristen
export const getSekolahKristens = async (req, res) => {
  try {
    const sekolahKristens = await SekolahKristen.findAll();
    res.json(sekolahKristens);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get SekolahKristen by ID
export const getSekolahKristenById = async (req, res) => {
  try {
    const sekolahKristen = await SekolahKristen.findOne({ where : { id: req.params.id}});
    if (!sekolahKristen) return res.status(404).json({ message: "SekolahKristen not found" });
    res.json(sekolahKristen);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const getSekolahKristenByStatus = async (req, res) => {
  try {
    const response = await SekolahKristen.findAll({
      where : {
        status_sekolah : req.params.status
      }
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create new SekolahKristen
export const createSekolahKristen = async (req, res) => {
  try {
    const sekolahKristen = await SekolahKristen.create(req.body);
    res.status(201).json(sekolahKristen);
  } catch (error) {
    res.status(400).json({ message: error.message });
    console.log(error);
  }
};

// Update SekolahKristen by ID
export const updateSekolahKristen = async (req, res) => {
  try {
    const sekolahKristen = await SekolahKristen.findByPk(req.params.id);
    if (!sekolahKristen) return res.status(404).json({ message: "SekolahKristen not found" });
    await sekolahKristen.update(req.body);
    res.json(sekolahKristen);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete SekolahKristen by ID
export const deleteSekolahKristen = async (req, res) => {
  try {
    const sekolahKristen = await SekolahKristen.findByPk(req.params.id);
    if (!sekolahKristen) return res.status(404).json({ message: "SekolahKristen not found" });
    await sekolahKristen.destroy();
    res.json({ message: "SekolahKristen deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
