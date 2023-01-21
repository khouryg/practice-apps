require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require('cors')
const {model} = require("./db.js");

let port = process.env.PORT || 3003;

const app = express();
app.use(cors())
app.use(express.json());
app.use(express.static(path.join(__dirname, "../client/dist")));

app.post('/words', (req, res) => {
  model.save(req.body)
  .then(res.end())
  .catch((err) => console.log(err))
});

app.get('/words', (req, res) => {
  model.getAll()
  .then((data) => {
    res.json(data);
  })
})

// how do i get this to to just be '/words/*' and accept a query term
app.delete('/words', (req, res) => {
  model.delete(req.body)
  .then(res.end());
})

app.patch('/words', (req, res) => {
  model.update(req.body._id, req.body.definition)
  .catch(err => {console.log(err)})
  res.end('hellow there');
})


app.listen(port);
console.log(`Listening at http://localhost:${port}`);
