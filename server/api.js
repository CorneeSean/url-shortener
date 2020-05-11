const path = require('path');

const urlShortenerController = require( './controllers/url-shortener.controller.js' );

const ROUTES = {
    root: '/',
};

module.exports = function bootstrap( app, config ) {
    app.get( ROUTES.root , ( req, res ) => {
        res.sendFile( path.resolve( __dirname + '/public/index.html' ) )
    } );

    urlShortenerController( ROUTES.root, app, config );
};
