// import NrTahunan from "../models/NrTahunan.js";
import NrTahunan from "../../models/SariaModels/NRTahunanModels.js";

// Create
export const createNrTahunan = async (req, res) => {
  try {
    const nrTahunan = await NrTahunan.create(req.body);
    res.status(201).json(nrTahunan);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Read all
export const getAllNrTahunan = async (req, res) => {
  try {
    const nrTahunans = await NrTahunan.findAll();
    res.status(200).json(nrTahunans);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Read one
export const getNrTahunanById = async (req, res) => {
  try {
    const nrTahunan = await NrTahunan.findByPk(req.params.id);
    if (nrTahunan) {
      res.status(200).json(nrTahunan);
    } else {
      res.status(404).json({ message: "NrTahunan not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update
export const updateNrTahunan = async (req, res) => {
  try {
    const [updated] = await NrTahunan.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated) {
      const updatedNrTahunan = await NrTahunan.findByPk(req.params.id);
      res.status(200).json(updatedNrTahunan);
    } else {
      res.status(404).json({ message: "NrTahunan not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete
export const deleteNrTahunan = async (req, res) => {
  try {
    const deleted = await NrTahunan.destroy({
      where: { id: req.params.id },
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: "NrTahunan not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
