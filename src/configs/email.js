/** @format */

const nodemailer = require("nodemailer");

module.exports = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  protocol: ssl,
  auth: {
    user: "9329hitman@gmail.com",
    pass: "8219947916@Atul",
  },
});