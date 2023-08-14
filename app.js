
const express = require('express');
const { HEROES } = require('./mock-heroes');
const { PORT } = require('./config');
const cors = require('cors');
const bodyParse = require('body-parser')

const app = express();

app.use(cors({
  origin: '*'
}))
// parse request body 
app.use(bodyParse.json())
app.use(bodyParse.urlencoded({ extended: false }))

app.listen(PORT, () => {
  console.log('Server is listening on port:', PORT);
})

app.get('/api/heroes', (req, res) => {
  const hereos = HEROES;
  res.send(hereos);
})

app.get('/api/heroes/:id', (req, res) => {
  console.log(req);
  const hereos = HEROES;
  const heroId = +req.params['id'];
  const hero = HEROES.find(hero => hero.id === heroId);
  if (hero) {
    res.send(hero);
  } else {
    res.sendStatus(404);
  }
})


app.put('/api/heroes', (req, res) => {
  console.log(req.body);
  const {id, name} = req.body;
  const hero = HEROES.find(hero => hero.id === id);
  if(hero && name) {
    hero.name = name;
    res.send(hero);
  } else {
    res.sendStatus(404);
  }
});

app.post('/api/heroes', (req, res) => {
  const {name} = req.body;
  if(!name) {
    return res.status(400).send('name must be not empty');
  }
  const id = HEROES.length ? (Math.max(...HEROES.map(hero => hero.id)) + 1) : 1;
  console.log(`id : ${id}`);
  const hero = {id, name};
  console.log(hero);
  HEROES.push(hero);
  res.send(hero);
})

app.delete('/api/heroes/:id', (req, res) => {
  console.log('call delete hero');
  const id = +req.params['id'];
  if(isNaN(id)) {
    return res.status(404).send({ message: 'Hero not found' });
  } 
  const hero = HEROES.find(hero => hero.id === id);
  if(!hero) {
    return res.status(404).send({ message: 'Hero not found' });
  }
  HEROES.splice(HEROES.indexOf(hero), 1);
  return res.send(hero);
})
app.get('/api/heroes/error', (req, res) => {
  console.log(req.body);
  res.status(400).send({
    message: 'Loi 400'
  })
})

