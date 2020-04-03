const mongoose = require("mongoose");
var uniqueValidator = require("mongoose-unique-validator");

const TestCenterSchema = new mongoose.Schema(
  {
    hospital: {
      type: String,
      minlength: 3,
      unique: true,
      required: [true, "Please enter a valid testing center."]
    },
    addressOne: {
      type: String,
      minlength: 3,
      unique: true,
      required: [true, "Please enter a valid address."]
    },
    addressTwo: {
      type: String,
      required: false
    },
    city: {
      type: String,
      minlength: 3,
      required: [true, "Please enter a valid city."]
    },
    state: {
      type: String,
      minlength: 2,
      required: [true, "Please select a state."]
    },
    zip: {
      type: Number,
      minlength: 5,
      required: [true, "Please enter a valid zip code."]
    },
    name: {
      type: String,
      minlength: 2,
      required: [true, "Please enter your name."]
    },
    email: {
      type: String,
      required: [true, "Please enter your email address."],
      validate: [
        val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
        "Please enter a valid email."
      ]
    },
    comments: {
      type: String,
      required: false
    },
    status: {
      type: Number,
      default: 0
    }
  },
  { timestamps: true }
);

TestCenterSchema.plugin(uniqueValidator, {
  message: "That testing center already exists."
});

module.exports.TestCenter = mongoose.model("TestCenter", TestCenterSchema);
