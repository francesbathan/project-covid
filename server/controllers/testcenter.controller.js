const { TestCenter } = require("../models/testcenter.model");

module.exports.submitTestCenter = (req, res) => {
  const {
    hospital,
    addressOne,
    addressTwo,
    city,
    state,
    zip,
    name,
    email,
    comments
  } = req.body;
  TestCenter.create({
    hospital,
    addressOne,
    addressTwo,
    city,
    state,
    zip,
    name,
    email,
    comments
  })
    .then(testCenter => res.json(testCenter))
    .catch(err => res.status(400).json(err));
};

module.exports.allTestCenters = (req, res) => {
  TestCenter.find()
    .then(testCenter => res.json(testCenter))
    .catch(err => res.json(err));
};

module.exports.findTestCenter = (req, res) => {
  TestCenter.findById({ _id: req.params.id })
    .then(testCenter => res.json(testCenter))
    .catch(err => res.json(err));
};

module.exports.updateTestCenter = (req, res) => {
  TestCenter.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    context: "query"
  })
    .then(updatedTestCenter => res.json(updatedTestCenter))
    .catch(err => res.status(400).json(err));
};

module.exports.deleteTestCenter = (req, res) => {
  TestCenter.findByIdAndDelete({ _id: req.params.id, runValidators: true })
    .then(deleteConfirm => res.json(deleteConfirm))
    .catch(err => res.json(err));
};
