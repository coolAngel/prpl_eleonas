const prpl = require('prpl-server');
const express = require('express');
const bodyParser = require('body-parser');


const conf = require('./build/polymer.json')

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))


app.post('/auth/sign-in', (req, res, next) => {
  console.log('auth/sign-in POST method...')
  console.log(req.body)
  res.json(req.body)
});

app.get('/api/launch', (req, res, next) => res.send('boom'));

app.get('/*', prpl.makeHandler('./build', conf));

app.listen(8080, ()=> {
  console.log('PRPL Serrver is started at port: 8080')
});