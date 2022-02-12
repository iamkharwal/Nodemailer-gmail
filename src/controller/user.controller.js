/** @format */

const express = require("express");
const router = express.Router();
const User = require("../model/user.model");
const transporter = require("../configs/email");


router.get("", async (req, res) => {
  try {
    const user = await User.find().lean().exec();
    return res.status(201).send(user);
  } catch (error) {
    return res.send(error);
  }
});

// router.get("", async (req, res) => {
//   try {
//     let page = +req.query.page || 1;
//     let size = +req.query.size || 5;
//     let skip = (page - 1) * size;

//     const user = await User.find().skip(skip).limit(size).lean().exec();
//     let totalPages = Math.ceil((await User.find().count()) / size);

//     return res.status(201).send({ user, totalPages });
//   } catch (error) {
//     return res.send(error);
//   }
// });

router.post("", async (req, res) => {
  try {
    const found = await User.findOne({ email: req.body.email }).lean().exec();
     if (found) {
       return res.status(400).send({ code: 404 });
    }
    
    const user = await User.create(req.body);
    var message = {
      from: "xxx@gmail.com",
      to: "xxx@gmail.com",
      subject:
        "You have received an email from portfolio from: " +" "+ user.full_name,
      text: "Plaintext version of the message",
      html:
        "<h1>Someone filled your portfolio contact form </h1>"
        
        + "<br> FullName: " +user.full_name + "<br>Email: " + user.email + "<br>Message: "+ user.message+
        ", </h1>",
    };

    transporter.sendMail(message);

    return res.status(201).send(user);
  } catch (error) {
    return res.send(error);
  }
});

module.exports = router;
