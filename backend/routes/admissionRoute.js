const express = require("express");
const router = express.Router();

const admissionContoller = require("../controllers/admissionContoller");

router.get("/", admissionContoller.admissions);

// api/v1/admissions/id
// api/v1/admissions/661cd3a0e28300c6a3444b46
router.get("/:id", admissionContoller.admission);

//create
router.post("/create", admissionContoller.createAdmission);

router.delete("/delete/:admissionID", admissionContoller.deleteAdmission);

router.put("/update/:id", admissionContoller.updateAdmission);

module.exports = router;
