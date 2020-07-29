const express = require("express");
const router = express.Router();
const db = require("../../models");
const bcrypt = require("bcryptjs");
const passport = require("passport");
const Cryptr = require("cryptr");

router.post("/", ({ body }, res) => {
  db.User.findOne({ email: body.email })
    .then(async (data) => {
      const password = await data.info.split("#")[0];
      await bcrypt.compare(body.password, password, async (err, bool) => {
        if (err) {
          return await res.status(400).json({ msg: "Invalid Credentials." });
        } else {
          function getPosition(index) {
            return data.info.split("#", index).join("#").length;
          }
          if (data.info) {
            try {
              const info = await Cryptr.decrypt(
                data.info.substring(getPosition(1) + 1, getPosition(2))
              );
              await res.json({
                email: data.email,
                info: info,
                contacts: [],
              });
            } catch {
              res.send(data);
            }
          }
        }
      });
    })
    .catch((err) => {
      res.status(404).json({ msg: "User Does Not Exist" });
      console.error(err);
    });
});

module.exports = router;
