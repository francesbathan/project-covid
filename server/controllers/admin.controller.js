const bcrypt = require("bcrypt");
const Admin = require("../models/admin.model");
const jwt = require("jsonwebtoken");

module.exports = {
  register(req, res) {
    Admin.create(req.body)
      .then(newAdmin => {
        const token = jwt.sign(
          {
            id: newAdmin._id,
            username: newAdmin.username
          },
          process.env.SECRET_KEY
        );
        res.cookie("token", token, {
          httpOnly: true
        });
        res.json({ status: "Success", token });
      })
      .catch(err => res.status(400).json(err));
  },

  async login(req, res) {
    const { username, password } = req.body;

    const errorMessage = "Incorrect login. Try again.";

    try {
      const admin = await Admin.findOne({ username });

      if (admin == null) {
        throw new Error(errorMessage);
      }
      const result = await bcrypt.compare(password, admin.password);

      if (result == false) {
        throw new Error(errorMessage);
      }
      const token = jwt.sign(
        {
          id: admin._id,
          username: admin.username
        },
        process.env.SECRET_KEY
      );
      res.cookie("token", token, {
        httpOnly: true
      });
      res.json({ status: "Success", token });
    } catch (event) {
      res.status(400).json({ message: errorMessage });
    }
  },

  logout(_, res) {
    res.clearCookie("token");
    res.json({ status: "Success" });
  }
};
