import db from "../../config/Database.js";
import { Sequelize } from "sequelize";
const { DataTypes } = Sequelize;

const Penyulu = db.define("penyulu", {
  status_pegawai: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  nama: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  tempat_tugas: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  jumlah_binaan: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  nama_kelompok: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },

}, {
    freezeTableName: true
});

export default Penyulu