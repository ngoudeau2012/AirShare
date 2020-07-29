const express = require("express");
const router = express.Router();
const db = require("../../models");
const bcrypt = require("bcryptjs");
const Cryptr = require("cryptr");
cryptr = new Cryptr("devnami");
const { check } = require("express-validator");
const { json } = require("body-parser");

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
    const salt = await bcrypt.genSalt(10);
    const contacts = [];
    function contractPush(key, value) {
      value = bcrypt.hash(value, salt);
      contacts.push({ key: value });
    }
    body.info.forEach((name) => contractPush(name));
    // json.
    for (const [key, value] of Object.entries(body.info)) {
      console.log(`${key}: ${value}`);
      console.log("key:    " + key);
      console.log("value:     " + value);
      //   contractPush(key, value);
    }

    db.User.findOneAndUpdate(
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

module.exports = router;
