const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route');
const route1= require('./routes/index')
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', route);
app.use('/',route1);

app.listen(process.env.PORT || 9000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 9000))
});
