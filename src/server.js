const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.get('/', (req, res) => {
    res.json({message: 'eae'});
});

app.use(cors());
app.use(express.json());
app.use(routes); 

app.listen(3333);   