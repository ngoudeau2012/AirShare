const express = require("express");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const expressSession = require("express-session");
const db = require("./config/db");

require("dotenv").config();
const PORT = process.env.PORT || 5000;

// MW
const app = express();
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());
app.use(logger("combined"));
app.use(
  expressSession({
    secret: process.env.SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: { secure: true },
  })
);
// DB
db();
// DB => API
app.use("/api/user", require("./routes/api/user"));
app.use("/api/accounts", require("./routes/api/accounts"));

app.listen(PORT, () => {
  console.log(`PORT ${PORT}`);
});
