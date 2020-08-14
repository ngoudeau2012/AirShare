require("dotenv").config();
const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const db = require("../../models");
const Cryptr = require("cryptr");
cryptr = new Cryptr(`${process.env.CRYPTRPASS}`);

const { informationFilter } = require("../../utils/api/informationFilter");

// Multer
const storage = multer.diskStorage({
  destination: "./images/uploads/",
  filename: function (req, file, cb) {
    // reads "name" on front end
    // "extname" takes extension of file of upload and adds to end. Pass through original
    //   and adds to file name
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});
//   init upload
const upload = multer({
  storage: storage,
  // method is name on form for front end
}).single("photoUpload");

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
  upload(res, res, (err) => {
    if (err) {
      console.log("err: " + err);
    } else {
      console.log("req.file=    " + req);
      console.log(file);
    }
  });

  if (req.file) {
    saveImage.upload(req, res, (err) => {
      if (err) {
        res.json(err);
      } else {
        const id = req.params.id;
        let arr = [];
        console.log("filename");
        console.log(req.file.filename);
        for (let [key, value] of Object.entries(req.body)) {
          console.log(`${key}: ${value}`);
          arr.push(`${key.substring(0, 2)}${cryptr.encrypt(value)}`);
          arr.push(`ph${req.file.filename}`);
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
      }
    });
  } else {
    console.log("yes");
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
  }
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
