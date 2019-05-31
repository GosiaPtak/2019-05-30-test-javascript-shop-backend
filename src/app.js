const express = require('express');
const app = express();
const cors = require('cors');
const port = 3001;

app.use(cors());
require('../src/api/routers/base.router')(app);

app.listen(port, () => {
    console.log(`server was started at ${port}`);
});

//console.log('Hello world');
