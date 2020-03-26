const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const AdminSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      minlength: [6, "Username must have 6 or more characters."]
    },
    password: {
      type: String,
      minlength: [8, "Password must have 8 or more characters."]
    }
  },
  { timestamps: true }
);

AdminSchema.pre("save", function(next) {
  bcrypt.hash(this.password, 10).then(hashedPassword => {
    this.password = hashedPassword;
    next();
  });
});

module.exports = mongoose.model("Admin", AdminSchema);
