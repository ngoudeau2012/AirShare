const Cryptr = require("cryptr");
require("dotenv").config();
cryptr = new Cryptr(`${process.env.CRYPTRPASS}`);

module.exports.informationFilter = function (item, arr) {
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
};
