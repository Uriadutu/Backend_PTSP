import { Sequelize } from "sequelize";
import db from "../../config/Database.js";
import SekolahKristen from "../PaludiModels/SekolahKristenModel.js";
import Sekolah from "../DisaModels/SekolahModels.js";
import PetaPengawas from "./PetaKepengawasanModel.js";

const { DataTypes } = Sequelize;

const Menejerial = db.define("menejerial", {
  id_pegawai: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: PetaPengawas,
      key: "id_pegawai",
    },
  },
  id_sekolah_paludi: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: SekolahKristen,
      key: "id",
    },
  },
  id_sekolah_disa: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Sekolah,
      key: "id",
    },
  },
  status_sertifikat: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  status_pegawai: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  keterangan: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
}, {
  freezeTableName: true,
});

PetaPengawas.hasMany(Menejerial, { foreignKey: "id_pegawai" });
Menejerial.belongsTo(PetaPengawas, { foreignKey: "id_pegawai" });

SekolahKristen.hasMany(Menejerial, { foreignKey: "id_sekolah_paludi" });
Menejerial.belongsTo(SekolahKristen, { foreignKey: "id_sekolah_paludi" });

Sekolah.hasMany(Menejerial, { foreignKey: "id_sekolah_disa" });
Menejerial.belongsTo(Sekolah, { foreignKey: "id_sekolah_disa" });

export default Menejerial