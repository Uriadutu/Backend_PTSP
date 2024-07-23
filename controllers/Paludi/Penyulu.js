import Penyulu from "../../models/PaludiModels/PenyuluModels.js";

export const getPenyulus = async (req, res) => {
  try {
    const penyulus = await Penyulu.findAll();
    res.json(penyulus);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getPenyuluById = async (req, res) => {
  try {
    const penyulu = await Penyulu.findByPk(req.params.id);
    if (!penyulu) return res.status(404).json({ message: "Penyulu not found" });
    res.json(penyulu);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createPenyulu = async (req, res) => {
  try {
    const penyulu = await Penyulu.create(req.body);
    res.status(201).json(penyulu);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updatePenyulu = async (req, res) => {
  try {
    const penyulu = await Penyulu.findByPk(req.params.id);
    if (!penyulu) return res.status(404).json({ message: "Penyulu not found" });
    await penyulu.update(req.body);
    res.json(penyulu);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deletePenyulu = async (req, res) => {
  try {
    const penyulu = await Penyulu.findByPk(req.params.id);
    if (!penyulu) return res.status(404).json({ message: "Penyulu not found" });
    await penyulu.destroy();
    res.json({ message: "Penyulu deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
