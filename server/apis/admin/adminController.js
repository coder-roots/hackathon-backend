const Admin = require("./adminModel");

const addAdmin = (req, res) => {
  var validationerror = [];
  if (!req.body) {
    validationerror.push("All feild are required");
  }
  if (validationerror.length > 0) {
    res.send({
      success: false,
      message: "Data is required",
      error: validationerror,
    });
  } else {
    let adminObj = new Admin();
    adminObj.name = req.body.name;
    adminObj.description = req.body.description;
    adminObj.hackathonBanner = req.body.hackathonBanner;
    adminObj.type = req.body.type;
    adminObj.theme = req.body.theme;
    adminObj.minTeamSize = req.body.minTeamSize;
    adminObj.maxTeamSize = req.body.maxTeamSize;
    adminObj.registerationStartDate = req.body.registerationStartDate;
    adminObj.registerationEndDate = req.body.registerationEndDate;
    adminObj.eligibilityCriteria = req.body.eligibilityCriteria;
    adminObj.rules = req.body.rules;
    adminObj.price = req.body.price;
    adminObj.organizerDetail = req.body.organizerDetail;
    adminObj.judges[0].name = req.body.judgesname;
    adminObj
      .save()
      .then((adminData) => {
        if (!adminData) {
          res.send({
            success: false,
            message: "Admin data could not be saved",
            error: err.message,
          });
        } else {
          res.send({
            success: true,
            message: "Admin data saved successfully",
            data: adminData,
          });
        }
      })
      .catch((err) => {
        res.send({
          success: false,
          message: "Internal server error",
          error: err.message,
        });
      });
  }
};

module.exports = { addAdmin };
