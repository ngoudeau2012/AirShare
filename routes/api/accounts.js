const express = require("express");
const router = express.Router();
const db = require("../../models");
const Cryptr = require("cryptr");
require("dotenv").config();
cryptr = new Cryptr(`${process.env.CRYPTRPASS}`);

// Get All Information
router.get("/:id/information", (req, res) => {
  const id = req.params.id;
  db.User.findById({ _id: id }).then((data) => {
    let arr = [{ email: data.email }];
    data.contacts.map((item) => {
      if (item.substring(0, 2) == "na") {
        arr.push({ name: cryptr.decrypt(item.substring(2)) });
      } else if (item.substring(0, 2) == "li") {
        arr.push({ linkedIn: cryptr.decrypt(item.substring(2)) });
      }
      //   Add additional info here
    });
    res.json({
      _id: id,
      information: arr,
    });
  });
});

// Update/Delete Information
router.put("/:id/information", (req, res) => {
  const id = req.params.id;
  const name = `na${cryptr.encrypt(req.body.name)}`;
  const linkedIn = `li${cryptr.encrypt(req.body.linkedIn)}`;
  console.log(name);
  db.User.findOneAndUpdate(
    {
      _id: id,
    },
    {
      $set: {
        information: [name, linkedIn],
      },
    }
  )
    .then((data) => {
      res.json(data);
      console.log(data);
    })
    .catch((err) => {
      res.status(400).json({ msg: err });
    });
});

module.exports = router;
