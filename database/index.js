const mongoose = require('mongoose');

let patientSchema = mongoose.Schema({
  id: {
    type: Number,
    unique: true
  },
  docID : Number,
  first: String,
  last: String,
  time: String,
  kind: String
});

let doctorSchema = mongoose.Schema({
  id: {
    type: Number,
    unique: true
  },
  first: String,
  last: String
});

let Doctor = mongoose.model('Doctor', doctorSchema);
let Patient = mongoose.model('Patient', patientSchema);

let findDocs = (cb) => {
  Doctor.find().exec((err,data)=>{
    if (err) {
      cb(err, null);
    } else {
      cb(null, data);
    }
  });
}

let getPatients = (docID, cb) => {
  Patient.find({docID: docID}).exec((err, data) => {
    if(err) {
      cb(err, null);
    } else {
      cb(null, data);
    }
  });
}

let deleteApt = (id, cb) => {
  Patient.deleteOne({id: id}).exec((err, data) => {
    if(err) {
      cb(err, null);
    } else {
      cb(null, data);
    }
  });
}


module.exports = {Doctor, Patient, findDocs, getPatients, deleteApt}
