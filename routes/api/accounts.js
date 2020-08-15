require("dotenv").config();
const express = require("express");
const router = express.Router();
const path = require("path");
const db = require("../../models");
const Cryptr = require("cryptr");
cryptr = new Cryptr(`${process.env.CRYPTRPASS}`);

const { informationFilter } = require("../../utils/api/informationFilter");

// Get All Information
router.get("/:id/information", (req, res) => {
  const id = req.params.id;
  db.User.findById({ _id: id })
    .then((data) => {
      let arr = [{ email: data.email }];
      console.log(data.information);
      data.information.map((item) => {
        informationFilter(item, arr);
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
  const id = req.params.id;
  console.log(req.body);
  let arr = [];
  for (let [key, value] of Object.entries(req.body)) {
    console.log("key, value");
    console.log(`${key}: ${value}`);
    if (key.substring(0, 2) !== "up") {
      arr.push(`${key.substring(0, 2)}${cryptr.encrypt(value)}`);
    } else {
      arr.push(`${key.substring(0, 2)}${value}`);
    }
  }
  db.User.findOneAndUpdate(
    {
      _id: id,
    },
    {
      $set: {
        information: arr,
      },
    },
    { runValidators: true, safe: true, upsert: false }
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
      $addToSet: {
        contacts: req.body.contacts,
      },
    }
  )
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(400).json({ msg: err });
    });
});

// DELETE Contact
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

// GET All
router.get("/:id/", (req, res) => {
  const id = req.params.id;
  db.User.findById({ _id: id }).then((data) => {
    let infoArr = [{ email: data.email }];
    data.information.map((item) => {
      informationFilter(item, infoArr);
    });
    res
      .json({
        information: infoArr,
        email: data.email,
        contacts: data.contacts,
      })
      .catch((err) => {
        res.status(400).json({ msg: err });
      });
  });
});
module.exports = router;
