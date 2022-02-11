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

// port: 587 or 465 (587 for tls, 465 for ssl)
// protocol: tls or ssl
// user: YOUR_USERNAME@gmail.com
// password: YOUR_PASSWORD