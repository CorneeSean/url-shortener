const PATHS = {
    hash: ':urlHash',
    shorten: 'shorten',
};

function redirectByUrlHash( req, res ) {
    function getUrlByHash( urlHash ) {
        // TODO: Retrieve url from storage
        return urlHash == '123' ? 'https://www.wp.pl' : null;
    }

    const redirectUrl = getUrlByHash( req.params[ 'urlHash' ] );
    return redirectUrl ?
        res.redirect( 301, redirectUrl ) :
        res.status( 404 ).send( 'Oops! 404! Your url was to hot to handle!' );
}

function shortenUrl( config ) {
    return ( req, res ) => {
        const url = req.body && req.body.url;
        if ( !url ) {
            return res.status( 400 ).send( { error: 'You are missing an URL, sweetheart!' } );
        }
        //TODO: Shortening hash magic + storage save goes here
        const urlHash = '123';

        return res.send( { shortUrl: config.host + '/' + urlHash } );
    }
}

module.exports = function urlShortenerController( basePath, app, config ) {
    app.get( basePath + PATHS.hash, redirectByUrlHash );
    app.post( basePath + PATHS.shorten, shortenUrl( config ) );
};
