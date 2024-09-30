const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();
const port = 9000;

app.use(cors());
app.use(express.json());

app.use('/', routes); 
app.listen(port, () => {
   console.log(`Server berjalan pada http://localhost:${port}`);
});
