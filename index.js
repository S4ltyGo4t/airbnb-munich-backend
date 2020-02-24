const router = require('./router');
const express = require('express');

const port = 3000;
const service = express();

service.use('/', router);
service.listen(port, () => console.log(`Listening on port ${port}`));
