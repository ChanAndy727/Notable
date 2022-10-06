const mongoose = require('mongoose');
const Doctor = require('./index');
mongoose.connect('mongodb://localhost/notable')
  .then(()=>{
    console.log('Mongo connection OPEN!');
  })
  .catch((err)=> {
    console.log(err);
  });

const seedPatients = [
  {
    id: 1,
    docID: 1,
    first: "John",
    last: "Doe",
    time: "8:00",
    kind: "New Patient"
  },
  {
    id: 2,
    docID: 1,
    first: "Jane",
    last: "Doe",
    time: "9:15",
    kind: "Follow-Up"
  }
];

const seedDoctors = [
  {
    id: 1,
    first: "Andy",
    last: "Chan"
  },
  {
    id: 2,
    first: "Bill",
    last: "Li"
  }
];

const seedDB = async() => {
  await Doctor.Doctor.deleteMany({});
  await Doctor.Patient.deleteMany({});
  await Doctor.Doctor.insertMany(seedDoctors);
  await Doctor.Patient.insertMany(seedPatients);
};

seedDB().then(()=>{
  console.log('seeded doctors & patients');
  mongoose.connection.close();
});

