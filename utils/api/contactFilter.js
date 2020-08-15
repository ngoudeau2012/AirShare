const Cryptr = require("cryptr");
require("dotenv").config();
cryptr = new Cryptr(`${process.env.CRYPTRPASS}`);

module.exports.contactFilter = async function (x, y) {
  for (item of x) {
    //   Only for valid users
    if (item.email) {
      // Set Base Object of Users Items
      let obj = [{ id: item._id }, { email: item.email }];

      // Map and Decrypt and Push to Object
      for (info of item.information) {
        if (info.substring(0, 2) == "up") {
          obj.push({ uploadPhoto: info.substring(2) });
        }
        if (info.substring(0, 2) == "po") {
          obj.push({ position: cryptr.decrypt(info.substring(2)) });
        }
        if (info.substring(0, 2) == "co") {
          obj.push({ company: cryptr.decrypt(info.substring(2)) });
        }
        if (info.substring(0, 2) == "na") {
          obj.push({ name: cryptr.decrypt(info.substring(2)) });
        }
        if (info.substring(0, 2) == "li") {
          obj.push({ linkedIn: cryptr.decrypt(info.substring(2)) });
        }
        if (info.substring(0, 2) == "pN") {
          obj.push({ pNumber: cryptr.decrypt(info.substring(2)) });
        }
        if (info.substring(0, 2) == "bi") {
          obj.push({ bio: cryptr.decrypt(info.substring(2)) });
        }
      }
      y.push(obj);
    }
  }
};
