import React from "react";
import "./QRCode.css";
import QRCode from "qrcode.react";

function QR(props) {
  let val = `http://localhost:5000/api/accounts/${props.userID}`;
  return <QRCode value={val} />;
}

export default QR;
