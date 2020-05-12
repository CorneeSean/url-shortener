const path = require( 'path' );

const port = 8080;

module.exports = {
    port,
    host: `http://localhost:${ port }`,
    storagePath: path.resolve( __dirname + '/storage/storage.txt' ),
    publicPath: path.resolve( __dirname + '/public' ),
    indexPath: path.resolve( __dirname + '/public/index.html' ),
};
