const PATHS = {
    hash: ':urlHash',
    shorten: 'shorten',
};

function redirectByUrlHash( { storage } ) {
    // TODO: Move url and protocol checking methods to utils
    const PROTOCOL_REGEX = /^(http|https):\/\//;
    const withProtocol = url => PROTOCOL_REGEX.test( url ) ? url : 'https://' + url;

    return ( req, res ) => {
        console.log( `GET ${ req.path }` );

        const redirectUrl = storage.get( req.params[ 'urlHash' ] );
        return redirectUrl ?
            res.redirect( 301, withProtocol( redirectUrl ) ) :
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
    // TODO: Move url and protocol checking methods to utils
    const URL_REGEX = /^((http|https):\/\/)?(www\.)?.*\.[a-zA-z]+$/; // TODO: recheck if regex could be better
    const isValidURL = url => URL_REGEX.test( url );
    const generateRandomHash = () => (Math.random() * 100000).toString().slice( 0, 5 );

    return ( req, res ) => {
        console.log( `POST ${ req.path }` );

        const url = req.body && req.body.url;
        if ( !url ) {
            return res.status( 400 ).send( { error: 'You are missing an URL, sweetheart!' } );
        }
        if ( !isValidURL( url ) ) {
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
