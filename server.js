const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/front-construct-calc'));
app.get('/*', function(res, req){
    res.sendFile(path.join(__dirname + '/dist/front-construct-calc/index.html'));
});
app.listen(process.env.PORT || 8080);