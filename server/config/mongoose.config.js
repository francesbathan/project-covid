const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true
  })
  .then(() => console.log("Established a connection to the database."))
  .catch(err =>
    console.log("Something went wrong when connecting to the database.", err)
  );
