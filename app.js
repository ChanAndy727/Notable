const express = require("express")
const app = express()
const mongoose = require('mongoose');
const db = require('./database/index')
mongoose.connect('mongodb://localhost/notable')
  .then(()=>{
    console.log('connected to MongoDB');
  })
  .catch((err)=> {
    console.log(err);
  });
const port = 3000

app.get('/doctors', (req, res) => {
  db.findDocs((err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data)
    }
  });
});

app.get('/doctors/:docID', (req, res) => {
  db.getPatients(req.params.docID, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});

app.delete('/doctors/:patID', (req, res) => {
  db.deleteApt(req.params.patID, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send("Deleted");
    }
  });
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})