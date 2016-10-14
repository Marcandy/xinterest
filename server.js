
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
mongoose.connection.once('open', () => console.log(`Connected to MongDB at ${ mongoUri }`) );

require('./masterRoutes')(app);
//file path
app.use( express.static( `${ __dirname }/dist` ) );

app.listen( port );
