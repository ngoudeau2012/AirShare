const Cryptr = require("cryptr");
require("dotenv").config();
cryptr = new Cryptr(`${process.env.CRYPTRPASS}`);

module.exports.contactFilter = function (x, y) {
  for (item of x) {
    //   Only for valid users
    if (item.email) {
      let obj = [{ id: item._id }, { email: item.email }];
      y.push(obj);
      for (info of item.information) {
        if (info.substring(0, 2) == "ph") {
          y.push([...obj, { photoURL: cryptr.decrypt(info.substring(2)) }]);
        }
      }
    }
  }
};
