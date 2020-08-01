const express = require("express");
const router = express.Router();
const db = require("../../models");
const Cryptr = require("cryptr");
const email = require("../../utils/nodemailer");
require("dotenv").config();
cryptr = new Cryptr(`${process.env.CRYPTRPASS}`);
const { check } = require("express-validator");

// Create User
router.post(
  "/create",
  [
    check("email", "Email must be present").isEmail(),
    check("password", "Password must be present").not().isEmpty(),
  ],
  ({ body }, res) => {
    if (body.password.length < 6) {
      res.json({ msg: "Password Must Be Greater Than 6 Characters" });
    }
    const password = cryptr.encrypt(body.password);
    db.User.create({ email: body.email, password: password })
      .then((result) => {
        email.newUser(body.email, body.password);
        res.json(result);
      })
      .catch((err) => {
        res.send(err);
      });
  }
);
// User login
router.post(
  "/login",
  [
    check("email", "Email must be present").isEmail(),
    check("password", "Password must be present").not().isEmpty(),
  ],
  ({ body }, res) => {
    db.User.findOne({ email: body.email })
      .then((data) => {
        if (data) {
          let password = data.password;
          password = cryptr.decrypt(password);
          if (body.password == password) {
            res.json(data);
          } else {
            res.status(400).json({ msg: "Password Incorrect" });
          }
        } else {
          res.status(400).json({ msg: "User Not Found" });
        }
      })
      .catch((err) => {
        res.server(500).json({ msg: err });
      });
  }
);

router.put(
  "/update",
  [
    check("email", "Email must be present").isEmail(),
    check("password", "Password must be present").not().isEmpty(),
  ],
  async ({ body }, res) => {
    db.User.findOne({ email: body.email })
      .then((data) => {
        // If User Exists
        // User Exists => Credentials Match
        const password = cryptr.decrypt(data.password);
        if (body.password == password) {
          // User Exists => MW To Validate New Credentials
          function validateEmail(email) {
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
          }
          if (body.newEmail) {
            if (!validateEmail(body.newEmail)) {
              res
                .status(400)
                .json({ msg: "The New Email Must Be In Email Formation." });
            }
          }
          if (body.newPassword) {
            if (body.newPassword.length < 6) {
              res.status(400).json({
                msg: "The New Password Must Be At Least 6 Characters.",
              });
            }
          }
          // User Exists => Valid New Credentials => Identify Update
          if (body.newPassword && body.newPassword) {
            body.newPassword = cryptr.encrypt(body.newPassword);
            db.User.findOneAndUpdate(
              { email: body.email },
              {
                $set: {
                  email: body.newEmail,
                  password: body.newPassword,
                },
              }
            )
              .then((data) => res.json(data))
              .catch((err) => {
                res.status(400).json({ msg: err });
              });
          } else if (body.newPassword) {
            body.newPassword = cryptr.encrypt(body.newPassword);
            db.User.findOneAndUpdate(
              { email: body.email },
              {
                $set: {
                  password: body.newPassword,
                },
              }
            )
              .then((data) => res.json(data))
              .catch((err) => {
                res.status(400).json({ msg: err });
              });
          } else if (body.newEmail) {
            db.User.findOneAndUpdate(
              { email: body.email },
              {
                $set: {
                  email: body.newEmail,
                },
              }
            )
              .then((data) => res.json(data))
              .catch((err) => {
                res.status(400).json({ msg: err });
              });
          } else {
            res.status(500).json({ msg: "Internal Error" });
          }
        } else {
          res.status(400).json({ msg: "Invalid Password" });
        }
      })
      .catch((err) => {
        // If No User
        res.status(400).json({ msg: err });
      });
    // db.User.findOneAndUpdate(
    //   { email: body.email },
    //   {
    //     $set: {
    //       email: body.newEmail,
    //     },
    //   },
    //   { new: true },
    //   (err, data) => {
    //     if (err) {
    //       res.status(400).json({ msg: err });
    //     } else {
    //       res.status(200).json({ msg: data });
    //     }
    //   }
    // ).catch((err) => {
    //   res.status(400).json({ msg: err });
    // });
  }
);

router.delete(
  "/delete",
  [check("email", "Email must be present").isEmail()],
  async ({ body }, res) => {
    db.User.findOneAndDelete({ email: body.email })
      .then(async (data) => {
        if (data) {
          res.status(200).json({ msg: data });
        } else {
          res.status(400).json({ msg: "User Not Found" });
        }
      })
      .catch((err) => {
        res.status(400).json({ msg: err });
      });
  }
);

module.exports = router;
