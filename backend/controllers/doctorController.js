const Doctor = require("../models/doctorSchema");

const mongoose = require("mongoose");

module.exports.doctors = (req, res) => {
  Doctor.find({ active: true })
    .then((doctors) => res.send(doctors))
    .catch((error) => res.send(error));
};

module.exports.doctor = (req, res) => {
  const doctorID = req.params.id;

  Doctor.findById(doctorID)
    .then((doctors) => res.send(doctors))
    .catch((error) => res.send(error));
};

module.exports.createDoctor = (req, res) => {
  const { firstName, lastName, speciality, active } = req.body;

  const newDoctor = new newDoctor({
    firstName,
    lastName,
    speciality,
    active
  });

  try {
    const savedDoctor = newDoctor.save();
    res.status(201).json({ "new doctor": newDoctor });
  } catch (error) {
    res.status(500).json({ error: error.message || "Internal Server Error" });
  }
};

module.exports.deleteDoctor = (req, res) => {
  const doctorID = req.params.doctorID;
  console.log(doctorID);

  const update = { active: false };

  Doctor.findByIdAndUpdate(doctorID, update, { new: true })
    .then((doctor) => res.send(doctor))
    .catch((error) => res.send(error));
};

module.exports.updateDoctor = (req, res) => {
  const { firstName, lastName, speciality, active } = req.body;

  console.log(req.body);

  const doctorID = req.params.id;
  console.log(doctorID);

  const updatedFields = { firstName, lastName, speciality, active };

  console.log(updatedFields);

  Doctor.findByIdAndUpdate(doctorID, updatedFields, { new: true })
    .then((updateDoctor) => {
      if (!updateDoctor) {
        return res.status(404).json({ error: "doctor not found" });
      }

      res.status(200).json(updateDoctor);
    })

    .catch((error) => {
      res.status(500).json({ error: error.message || "Internal server error" });
    });
};
const Doctor = require("../models/doctorSchema");

const mongoose = require("mongoose");

module.exports.doctors = (req, res) => {
  Doctor.find({ active: true })
    .then((doctors) => res.send(doctors))
    .catch((error) => res.send(error));
};

module.exports.doctor = (req, res) => {
  const doctorID = req.params.id;

  Doctor.findById(doctorID)
    .then((doctors) => res.send(doctors))
    .catch((error) => res.send(error));
};

module.exports.createDoctor = (req, res) => {
  const { firstName, lastName, speciality, active } = req.body;

  const newDoctor = new Doctor({
    firstName,
    lastName,
    speciality,
    active
  });

  try {
    const savedDoctor = newDoctor.save();
    res.status(201).json({ "new doctor": newDoctor });
  } catch (error) {
    res.status(500).json({ error: error.message || "Internal Server Error" });
  }
};

module.exports.deleteDoctor = (req, res) => {
  const doctorID = req.params.doctorID;
  console.log(doctorID);

  const update = { active: false };

  Doctor.findByIdAndUpdate(doctorID, update, { new: true })
    .then((doctor) => res.send(doctor))
    .catch((error) => res.send(error));
};

module.exports.updateDoctor = (req, res) => {
  const { firstName, lastName, speciality, active } = req.body;

  console.log(req.body);

  const doctorID = req.params.id;
  console.log(doctorID);

  const updatedFields = { firstName, lastName, speciality, active };

  console.log(updatedFields);

  Doctor.findByIdAndUpdate(doctorID, updatedFields, { new: true })
    .then((updateDoctor) => {
      if (!updateDoctor) {
        return res.status(404).json({ error: "doctor not found" });
      }

      res.status(200).json(updateDoctor);
    })

    .catch((error) => {
      res.status(500).json({ error: error.message || "Internal server error" });
    });
};
