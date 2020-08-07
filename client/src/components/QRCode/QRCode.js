import React from "react";
import "./Navbar.css";
var QRCode = require("qrcode.react");

function _QRCode(props) {
  let val = `http://localhost:5000/api/accounts/${props.userId}`;
  return <QRCode value={val} />;
}

export default _QRCode;
