const path = require( 'path' );

const port = 8080;
const parcelDevServerOrigin = 'http://localhost:1234';

const corsOptions = {
    origin: parcelDevServerOrigin
};

module.exports = {
    port,
    host: `http://localhost:${ port }`,
    corsOptions,
    storagePath: path.resolve( __dirname + '/storage/storage.txt' ),
    publicPath: path.resolve( __dirname + '/public' ),
    indexPath: path.resolve( __dirname + '/public/index.html' ),
};
