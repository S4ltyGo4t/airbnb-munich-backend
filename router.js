const express = require('express');
const csv = require('csv-parser');
const {createReadStream, existsSync} = require('fs');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('root page');
});

router.get('/about', (req, res) => {
  res.send('about page');
});

router.get('/csv/:name', (req, res) => {
  let results = [];
  let requestedFile = `./../dataset/${req.params.name}`
  if (existsSync(requestedFile)) {
    createReadStream(requestedFile)
        .pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', () => res.status(200).send(results))
  } else {
    res.status(404).send(`File '${req.params.name}' not found`);
  }


});

module.exports = router;
