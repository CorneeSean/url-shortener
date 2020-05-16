const UrlUtils = require( "../../common/utils/url-utils.js" );

const PATHS = {
    hash: ':urlHash',
    shorten: 'shorten',
};

function redirectByUrlHash( { storage } ) {
    return ( req, res ) => {
        console.log( `GET ${ req.path }` );

        const redirectUrl = storage.get( req.params[ 'urlHash' ] );
        return redirectUrl ?
            res.redirect( 301, UrlUtils.addProtocol( redirectUrl ) ) :
            res.status( 404 ).send( 'Oops! 404! Your url was to hot to handle!' );
    }
}

/**
 *
 * @param {Object} config
 * @param {KeyValueFileStorage} storage
 * @return {function(...[*]=)}
 */
function shortenUrl( { config, storage } ) {
    const generateRandomHash = () => (Math.random() * 100000).toString().slice( 0, 5 );

    return ( req, res ) => {
        console.log( `POST ${ req.path }` );

        const url = req.body && req.body.url;
        if ( !url ) {
            return res.status( 400 ).send( { error: 'You are missing an URL, sweetheart!' } );
        }
        if ( !UrlUtils.isValidURL( url ) ) {
            return res.status( 400 ).send( { error: 'This is not a valid URL, honey!' } );
        }

        const urlHash = generateRandomHash();
        try {
            storage.add( urlHash, url );
            console.log( `LOG: Saved ${ url } at ${ urlHash }` );
        } catch {
            //TODO: Add proper error handling and response here
            return res.status( 500 );
        }

        return res.send( { shortUrl: config.host + '/' + urlHash } );
    }
}

module.exports = function urlShortenerController( basePath, app, deps ) {
    app.get( basePath + PATHS.hash, redirectByUrlHash( deps ) );
    app.post( basePath + PATHS.shorten, shortenUrl( deps ) );
};
