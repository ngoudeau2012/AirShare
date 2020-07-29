const express = require("express");
const router = express.Router();
const db = require("../../models");
const bcrypt = require("bcryptjs");
const Cryptr = require("cryptr");
cryptr = new Cryptr("devnami");
const { check } = require("express-validator");
const { json } = require("body-parser");

router.get("/contacts", (req, res) => {
  db.User.findOne({ email: req.body.email })
    .then((data) => {
      let emailList = [];
      console.log(data);
      res.json(data);
      data.contacts.forEach((email) => {
        Cryptr.decrypt(email);
        emailList.push(email);
      });
    })
    .catch((err) => console.error(err));
});

router.post(
  "/",
  [
    check("email", "Email must be present").isEmail(),
    check("password", "Password must be present").not().isEmpty(),
  ],
  async ({ body }, res) => {
    // function lowerCase(str) {
    //   return /[a-z][A-Z]/.test(str);
    // }
    if (body.password.length < 6) {
      res.json({ msg: "Password Must Be Greater Than 6 Characters" });
    }
    // if (!lowerCase(body.password)) {
    //   res.json({
    //     msg:
    //       "Password Must Contain at Least One Upper Case and One Lower Case Letter.",
    //   });
    // }
    const salt = await bcrypt.genSalt(10);
    body.password = await bcrypt.hash(body.password, salt);
    db.User.create({ email: body.email, info: body.password, contacts: [] })
      .then((result) => res.json(result))
      .catch((err) => {
        res.send(err);
      });
  }
);

router.put(
  "/",
  [
    check("email", "Email must be present").isEmail(),
    check("password", "Password must be present").not().isEmpty(),
    check("info", "Information must contain at least one piece to update")
      .not()
      .isEmpty(),
  ],
  async ({ body }, res) => {
    const contacts = [];
    function contractPush(key, value, salt) {
      value = bcrypt.hash(value, salt);
      return contacts.push({ key: value });
    }
    const salt = bcrypt.genSalt(10);

    for (const [k, v] of Object.entries(body.info)) {
      const keys = Object.keys(v)[0];
      const values = Object.values(v)[0];
      await contractPush(keys, values, salt);
    }

    console.log(contacts);

    await db.User.findOneAndUpdate(
      { email: body.email },
      {
        $set: {
          email: body.email,
          //   info: body.password,
          contacts: contacts,
        },
      },
      { new: true }
    )

      .then((result) => res.json(result))
      .catch((err) => {
        res.send(err);
      });
  }
);

router.delete(
  "/",
  [check("email", "Email must be present").isEmail()],
  async ({ body }, res) => {
    db.User.findOneAndDelete({ email: body.email })
      .then(async (data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(404).json({ msg: "User Does Not Exist" });
        console.error(err);
      });
  }
);

module.exports = router;
