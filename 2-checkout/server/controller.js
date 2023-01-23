const model = require('./model.js');

const controller = {
  post(req, res){
    console.log('post request');
    console.log('req.body', req.body);
    model.createInvoice(req.body)
    .then((response) => {
      console.log(response);
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    })
  }
}

module.exports = controller;