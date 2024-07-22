import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import User from "./UserModel.js";

const { DataTypes } = Sequelize;

const HakAkses = db.define(
  "hakAkses",
  {
    User: {
      type: DataTypes.INTEGER,
    },
    lapasi: {
      type: DataTypes.BOOLEN,
    },
    pantai_disa: {
      type: DataTypes.BOOLEN,
    },
    aksesahu: {
      type: DataTypes.BOOLEN,
    },
    saria: {
      type: DataTypes.BOOLEN,
    },
    paludi: {
      type: DataTypes.BOOLEN,
    },
    sahu: {
      type: DataTypes.BOOLEN,
    },
    layanan_pengaduan: {
      type: DataTypes.BOOLEN,
    },
  },
  {
    freezeTableName: true,
  }
);

HakAkses.hasMany(User)
User.belongsTo(HakAkses, {foreignKey : "User"});

export default HakAkses
