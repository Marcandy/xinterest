
const express = require( 'express' );
const app = express();
const port = 4000;

//file path
app.use( express.static( `${ __dirname }/dist` ) );

app.listen( port );
