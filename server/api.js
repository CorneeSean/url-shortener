const urlShortenerController = require( './controllers/url-shortener.controller.js' );

const ROUTES = {
    root: '/',
    favicon: '/favicon.ico'
};

module.exports = function bootstrap( app, deps ) {
    app.get( ROUTES.root, ( req, res ) => {
        res.sendFile( deps.config.indexPath )
    } );
    app.get( ROUTES.favicon , (req, res) => {
        // TODO: Add favicon in the future
        res.status(404);
    });

    urlShortenerController( ROUTES.root, app, deps );
};
