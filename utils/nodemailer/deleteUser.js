const nodemailer = require("nodemailer");
require("dotenv").config();

module.exports.deleteUser = function (email) {
  var transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAILPASS,
    },
  });
  let mailOptions = {
    from: "AirShareGenerational@gmail.com",
    to: email,
    subject: `Account Deactivated- Air Share `,
    text: ` Were sad to see you go! Please keep us in mind for future instances.`,
  };
  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      return err;
    }
    return console.log("Email sent!!!");
  });
};
