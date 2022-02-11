/** @format */

const nodemailer = require("nodemailer");

module.exports = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "9329hitman@gmail.com",
    pass: "8219947916@Atul", 
  },
});
