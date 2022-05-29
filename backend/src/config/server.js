const express = require('express');
const cors=require('cors');
const app = express();

app.use(express.json());

app.set('port', 3000);
app.use(cors());

module.exports = app;