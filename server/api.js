const urlShortenerController = require( './controllers/url-shortener.controller.js' );

const ROUTES = {
    root: '/',
};

module.exports = function bootstrap( app, deps ) {
    app.get( ROUTES.root, ( req, res ) => {
        res.sendFile( deps.config.indexPath )
    } );

    urlShortenerController( ROUTES.root, app, deps );
};
