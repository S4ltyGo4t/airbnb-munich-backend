const router = require('./router');
const express = require('express');
const cors = require('cors');


const port = 3000;
const app = express();
app.use(cors());

app.use('/', router);
app.listen(process.env.PORT || port, () => console.log(`Listening on port ${port}`));
