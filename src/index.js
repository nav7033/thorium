const express = require('express');
const moment= require('moment')

const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const globalMid= (req,res,next)=>{
    const logged= moment().format()+" , "+req.ip +" , "+req.url

    console.log(logged)
    next()
}
app.use(globalMid)
//headers['x-forwarded-for']


mongoose.connect("mongodb+srv://nav7033:n2cGJvLjcd2n6Jsk@cluster0.uhbum.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
