require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require('cors')
const {definition} = require("./db.js");

let port = process.env.PORT || 3003;

const app = express();
app.use(cors())
app.use(express.json());
app.use(express.static(path.join(__dirname, "../client/dist")));

app.post('/words', (req, res) => {
  definition.create(req.body)
  .then(() => {
    definition.find()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => err)
  })
});

app.get('/words', (req, res) => {
  definition.find().exec()
  .then((data) => {
    res.json(data);
  })
})

// how do i get this to to just be '/words/*' and accept a query term
app.delete('/words/del', (req, res) => {
  console.log('this is the body of the req', req.body);
  definition.findOneAndDelete(req.body)
  .then(res.end());
})


app.listen(port);
console.log(`Listening at http://localhost:${port}`);
