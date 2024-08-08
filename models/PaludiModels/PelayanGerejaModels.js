import db from "../../config/Database.js";
import { Sequelize } from "sequelize";
import Gereja from "./GerejaModel.js";

const { DataTypes } = Sequelize;

const PelayanGereja = db.define(
  "PelayanGereja",
  {
    nama_gereja: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    nama_pelayan: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    jenis_kelamin: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    pendidikan_terakhir: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    jabatan_pelayan: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    jabatan_bphj: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    jabatan_bidang: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  },
  {
    freezeTableName: true,
  }
);

PelayanGereja.hasMany(Gereja, { foreignKey: "gerejaId" });
Gereja.belongsTo(PelayanGereja, { foreignKey: "gerejaId" });

export default PelayanGereja;
