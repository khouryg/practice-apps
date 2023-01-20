require("dotenv").config();
const express = require("express");
const path = require("path");
const {definition} = require("./db.js");

let port = process.env.PORT || 3001;

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "../client/dist")));

app.post('/words', (req, res) => {
  definition.create(req.body)
  .then(() => {
    definition.find()
    .then((data) => {
      res.json(data);
    })
  })

  // .catch((error) => {
  //   throw new Error ('There was an error writing to db', error);
  // })
});

app.get('/words', (req, res) => {
  definition.find().exec()
  .then((data) => {
    res.json(data);
  })
})


app.listen(port);
console.log(`Listening at http://localhost:${port}`);
