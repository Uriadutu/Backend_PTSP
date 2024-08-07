import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Pegawai from "./LapasiModels/PegawaiModels.js";

const { DataTypes } = Sequelize;

const Pengaduan = db.define('pengaduan', {
  id_pegawai: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Pegawai,
      key: 'id'
    }
  },
  
  jenisPengaduan: {
    type: DataTypes.STRING,
    allowNull: false
  },
  deskripsiPengaduan: {
    type: DataTypes.TEXT,
    allowNull: false
  }
}, {
  freezeTableName: true
});

Pegawai.hasMany(Pengaduan, { foreignKey: 'id_pegawai' });
Pengaduan.belongsTo(Pegawai, { foreignKey: 'id_pegawai' });

export default Pengaduan;
