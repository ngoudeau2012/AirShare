const mongoose = require("mongoose");
const UserSchema = mongoose.Schema({
  email: {
    type: String,
    match: [
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      `Please Fill Valid Email Address`,
    ],
    validate: {
      validator: function () {
        return new Promise((res, rej) => {
          User.findOne({ email: this.email, _id: { $ne: this._id } })
            .then((data) => {
              if (data) {
                res(false);
              } else {
                res(true);
              }
            })
            .catch((err) => {
              res(false);
            });
        });
      },
      message: "Email Already Taken",
    },
  },
  password: {
    type: String,
  },
  information: {
    type: Array,
  },
  contacts: {
    type: Array,
    required: false,
    trim: true,
  },
});

const User = mongoose.model("user", UserSchema);

module.exports = User;
