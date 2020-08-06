const nodemailer = require("nodemailer");
require("dotenv").config();

module.exports.newUser = function (email, password) {
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
    subject: `Welcome to AirShare! `,
    text: ` This revolutionary application will help minimize xxxxxxxxxxxxxxx
      Please keep this information confidential:
      Email: ${email}
      Password: ${password}`,
  };
  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      return err;
    }
    return console.log("Email sent!!!");
  });
};
