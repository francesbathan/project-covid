const TestCenterCtl = require("../controllers/testcenter.controller");

const { authenticate } = require("../config/jwt.config");

module.exports = function(app) {
  app.get("/api/testcenters", authenticate, TestCenterCtl.allTestCenters);
  app.get("/api/alltestcenters", TestCenterCtl.allTestCenters);
  app.get("/api/testcenters/:id", TestCenterCtl.findTestCenter);
  app.post("/api/testcenters/new", TestCenterCtl.submitTestCenter);
  app.put("/api/testcenters/:id/update", TestCenterCtl.updateTestCenter);
  app.delete("/api/testcenters/:id", TestCenterCtl.deleteTestCenter);
};
