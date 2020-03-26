const adminControl = require("../controllers/admin.controller");

module.exports = app => {
  app.post("/api/admin", adminControl.register);
  app.post("/api/admin/login", adminControl.login);
  app.delete("/api/admin/logout", adminControl.logout);
};
