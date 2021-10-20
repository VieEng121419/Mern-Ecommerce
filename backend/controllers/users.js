import { UserModel } from "../models/UserModel.js";
import bcrypt from "bcryptjs";
import { data } from "../data.js";
import { generateToken } from "../utils.js";

export const getUsers = async (req, res) => {
  try {
    const user = await UserModel.find();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await UserModel.findById(req.body.id);
    res.status(200).json(user.role);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const postUsers = async (req, res) => {
  try {
    const createdUsers = await UserModel.insertMany(data.users);
    res.status(200).json(createdUsers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createUser = async (req, res) => {
  try {
    const newUser = {
      ...req.body,
      password: bcrypt.hashSync(req.body.password, 8),
    };
    const user = new UserModel(newUser);
    await user.save();
    res.status(200).send({
      info: {
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phone: user.phone,
        role: user.role,
        sex: user.sex,
        address: user.address,
        token: generateToken(user),
      },
      message: {
        message: "Đăng ký thành công !",
      },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const loginUser = async (req, res) => {
  try {
    const newUser = { email: req.body.email };
    const user = await UserModel.findOne(newUser);
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        res.status(200).send({
          info: {
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            phone: user.phone,
            sex: user.sex,
            role: user.role,
            address: user.address,
            token: generateToken(user),
          },
          message: {
            message: "Đăng nhập thành công !",
          },
        });
        return;
      }
    }
    res.status(401).send({ message: "Email hoặc mật khẩu không chính xác !" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
