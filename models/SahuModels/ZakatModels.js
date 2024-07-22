import db from "../../config/Database.js";

import Sequelize from "sequelize";
const {DataTypes} = Sequelize;

const Zakat = db.define("Zakat", {
  nama_kecamatan: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  kategori: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  sumber: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  jumlah : {
    type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
  },
  jenis : {
    type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
  },
  
});