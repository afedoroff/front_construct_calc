const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static(__dirname + '/dist/front-construct-calc'));
app.listen(process.env.PORT || 8080);