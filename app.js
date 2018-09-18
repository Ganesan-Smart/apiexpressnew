var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var itemRouter = require('./routers/item');
var userRouter = require('./routers/user');
var cartRouter = require('./routers/cart');
var cors = require('cors');

var app = express();

var port =process.env.PORT || 3000;;
var HOST_NAME = 'localhost';
var DATABASE_NAME = 'foodieee';







var mongoose = require('mongoose');    

var uri = 'mongodb://vicky:vickymaha123@ds261072.mlab.com:61072/foodieee';

var options = {
  "server" : {
    "socketOptions" : {
      "keepAlive" : 300000,
      "connectTimeoutMS" : 30000
    }
  },
  "replset" : {
    "socketOptions" : {
      "keepAlive" : 300000,
      "connectTimeoutMS" : 30000
    }
  }
}

mongoose.connect(uri, options);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));




db.once('open', () =>{
 console.log('connected to adatabase');   
                  
});




















app.use(cors()); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.get(‘/’, function (req, res) {
 res.send(JSON.stringify({ Hello: ‘World’}));
});

app.use('/api', itemRouter);
app.use('/api', userRouter);
app.use('/api', cartRouter);

app.listen(port, function () {
	console.log("Database connected");
  console.log('Listening on port ' + PORT);
});
