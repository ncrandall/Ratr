
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes');



var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({dumpExceptions: true, showStack: true}));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes

app.get('/', routes.index)

//
// Users

function loadUser(req,res,next){
    next();
}

app.get('/profile/:userid',function(req,res){
    res.json({hello: "world"})
})

app.post('/profile',function(req,res){
    res.json({user: req.param("userid"), create: "ok"})
})

app.put('/profile/:userid',loadUser,function(req,res){
    res.json({user: req.param("userid"), update: "ok"})
})

app.del('/profile/:userid',loadUser,function(req,res){
    res.json({user: req.param("userid"), remove: "ok"})
})

app.listen(3000, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
