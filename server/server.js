const express = require("express");
const cors = require("cors");
const app = express();
const cookieParser = require("cookie-parser");

require("dotenv").config({ path: __dirname + "/.env" });
require("./config/mongoose.config");

app.use(cors({ credentials: true, origin: "http://localhost:3000 " }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

require("./routes/admin.routes")(app);

app.listen(8000, () => {
  console.log("Now live at Port 8000.");
});
