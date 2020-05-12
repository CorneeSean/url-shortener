const express = require( 'express' );
const KeyValueFileStorage = require( './lib/key-value-file-storage.js' );

const config = require( './config.js' );
const bootstrapApi = require( './api.js' );

const deps = {
    config,
    storage: new KeyValueFileStorage( config.storagePath )
};

const app = express();

app.use( express.json() );
app.use( '/public', express.static( config.publicPath ) );

bootstrapApi( app, deps );

app.listen( config.port, () => console.log( `Url Shortener Server listening at ${ config.host }` ) );
