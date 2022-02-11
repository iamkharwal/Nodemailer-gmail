/** @format */

const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  full_name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
});

module.exports = model("user", userSchema);
