const express = require( 'express' );
const path = require( 'path' );

const config = require( './config.js' );
const bootstrapApi = require( './api.js' );

const app = express();

app.use( express.json() );
app.use( '/public', express.static( path.resolve( __dirname + '/public') ) );

bootstrapApi( app, config );

app.listen( config.port, () => console.log( `Url Shortener Server listening at ${ config.host }` ) );
