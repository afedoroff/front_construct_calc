const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/front-construct-calc'));
app.listen(process.env.PORT || 8080);