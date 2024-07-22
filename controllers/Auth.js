import argon2 from "argon2";
import User from "../Models/UserModel.js";

export const Login = async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    if (user) {
      const match = await argon2.verify(user.password, req.body.password);
      if (!match) {
        return res.status(400).json({ msg: "Password salah" });
      }
    } else {
      return res.status(404).json({ msg: "User tidak ditemukan" });
    }

    // Berhasil login
    req.session.userId = user.id;
    const { username, role } = user;
    const nama = user.name;
    const id = user.id;
    res.status(200).json({ id, nama, username, role });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Terjadi kesalahan dalam proses login" });
  }
};

export const Me = async (req, res) => {
  try {
    if (!req.session.userId) {
      return res.status(401).json({ msg: "Mohon login terlebih dahulu" });
    }

    const user = await User.findOne({
      where: {
        id: req.session.userId,
      },
    });

    if (user) {
      res.status(200).json(user);
    } else {
      return res.status(404).json({ msg: "Data tidak ditemukan" });
    }
  } catch (error) {
    console.error("Terjadi Kesalahan:", error);
    res.status(500).json({
      msg: "Terjadi kesalahan",
    });
  }
};

export const Logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) return res.status(400).json({ msg: "Tidak dapat logout" });
    res.status(200).json({ msg: "logout telah berhasil" });
  });
};
