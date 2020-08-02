const express = require("express");
const router = express.Router();
const db = require("../../models");
const Cryptr = require("cryptr");
require("dotenv").config();
cryptr = new Cryptr(`${process.env.CRYPTRPASS}`);

// Get All Information
router.get("/:id/information", (req, res) => {
  const id = req.params.id;
  db.User.findById({ _id: id })
    .then((data) => {
      let arr = [{ email: data.email }];
      console.log(data.information);
      data.information.map((item) => {
        // console.log(item[0]);
        if (item.substring(0, 2) == "na") {
          arr.push({ name: cryptr.decrypt(item.substring(2)) });
        } else if (item.substring(0, 2) == "li") {
          arr.push({ linkedIn: cryptr.decrypt(item.substring(2)) });
        } else if (item.substring(0, 2) == "pN") {
          arr.push({ phoneNumber: cryptr.decrypt(item.substring(2)) });
        } else if (item.substring(0, 2) == "we") {
          arr.push({ website: cryptr.decrypt(item.substring(2)) });
        } else if (item.substring(0, 2) == "co") {
          arr.push({ company: cryptr.decrypt(item.substring(2)) });
        } else if (item.substring(0, 2) == "ph") {
          arr.push({ photoURL: cryptr.decrypt(item.substring(2)) });
        } else {
          return;
        }

        //   Add additional info here
      });
      res.json({
        _id: id,
        information: arr,
      });
    })
    .catch((err) => res.status(400).json({ msg: err }));
});

// Add/Update/Delete Information
router.put("/:id/information", (req, res) => {
  console.log(req.body);
  const id = req.params.id;
  let arr = [];
  for (let [key, value] of Object.entries(req.body)) {
    console.log(`${key}: ${value}`);
    arr.push(`${key.substring(0, 2)}${cryptr.encrypt(value)}`);
  }

  db.User.findOneAndUpdate(
    {
      _id: id,
    },
    {
      $set: {
        information: arr,
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

// GET Contacts
router.get("/:id/contacts", (req, res) => {
  const id = req.params.id;
  db.User.findById({ _id: id })
    .then((data) => {
      res.json(data.contacts);
    })
    .catch((err) => {
      res.status(400).json({ msg: err });
    });
});
// Add Contacts
router.put("/:id/contacts/add", (req, res) => {
  const id = req.params.id;
  db.User.findByIdAndUpdate(
    { _id: id },
    {
      $push: {
        contacts: req.body.contacts,
      },
      // $addToSet: {
      //   contacts: req.body.contacts,
      // },
    },
    { safe: true, upsert: true }
  )
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(400).json({ msg: err });
    });
});

// DELETE Contacts
router.put("/:id/contacts/delete", (req, res) => {
  const id = req.params.id;
  db.User.findByIdAndUpdate(
    { _id: id },
    {
      $pull: {
        contacts: req.body.contacts,
      },
    },
    { safe: true, upsert: true }
  )
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(400).json({ msg: err });
    });
});
module.exports = router;
