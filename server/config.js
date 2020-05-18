const path = require( 'path' );
const env = require( "../common/env.js" );

const corsOptions = {
    origin: env.frontendHost,
};

module.exports = {
    port: env.serverPort,
    host: env.serverHost,
    corsOptions,
    storagePath: path.resolve( __dirname + '/storage/storage.txt' ),
    publicPath: path.resolve( __dirname + '/public' ),
    indexPath: path.resolve( __dirname + '/public/index.html' ),
};
