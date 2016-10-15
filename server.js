
const express = require( 'express' );
const {json} = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const port = 4000;


const mongoUri = 'mongodb://localhost:27017/xinterest';

app.use( json() );
app.use( cors() );



mongoose.connect( mongoUri );
mongoose.connection.once('open', () => console.log(`Connected to MongoDB at ${ mongoUri }`) );

// require('./masterRoutes')(app);
//file path
app.use( express.static( `${ __dirname }/dist` ) );

app.use( session({secret: config.config.mySecrets.secret}));
app.use( passport.initialize() );
app.use( passport.session() );

passport.use( new facebookStrategy({
  clientID: config.facebook.clientID,
  clientSecret: config.facebook.secret,
  callbackUrl: config.facebook.cbUrl,
}, function(token, refreshToken, profile, done) {
    return done(null, profile);
}));

//serializer
app.get("/auth/facebook", passport.authenticate("facebook"));
app.get("/auth/facebook/callback", passport.authenticate("facebook", {
  successRedirect : "/home",
  failureRedirect : "/"
}));

passport.serializeUser(function(user, done){
  console.log("serialize");
  done(null, user);
});

passport.deserializeUser(function(user, done){
  console.log("deserialize");
  done(null, user);
});

app.get("/api/facebook", logged, function(req, res, next){
  console.log(req.user);
  res.send(req.user);
})

app.listen( port, () => console.log( `Express is listening on ${ port }`) );
