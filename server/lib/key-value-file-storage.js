const fs = require( 'fs' );
const nodePath = require( 'path' );

const CSV_SEPARATOR = ',';
const KV_SEPARATOR = ':';

/**
 * Simple Key-value file storage with in-memory cache.
 *
 * Save data format is CSV key-value pairs:
 * key{separator}value,key{separator}value,key{separator}value
 */
class KeyValueFileStorage {
    /**
     * @param {string} filePath Storage file path
     */
    constructor( filePath ) {
        /**
         * In-memory key-value object representation of stored data.
         * @type {Object<string, string>}
         * @private
         */
        this._cache = this._loadDataFromStorage( filePath );

        /**
         * @type {WriteStream}
         * @private
         */
        this._fileStream = this._createFileStream( filePath )
    }

    /**
     * @param {string} key
     * @return {string}
     */
    get( key ) {
        return this._cache[ key ];
    }

    /**
     * @param {string} key
     * @param {string} value
     */
    add( key, value ) {
        if ( this._cache[ key ] ) {
            throw new Error( `Entry already exists under ${ key } key` );
        }

        try {
            this._saveKVPair( key, value );
        } catch {
            throw new Error( 'Failed to save KV pair' );
        }

        this._cache[ key ] = value;
    }

    /**
     * @param {string} filePath
     * @return {WriteStream}
     * @private
     */
    _createFileStream( filePath ) {
        const dirPath = nodePath.dirname( filePath );
        if ( !fs.existsSync( dirPath ) ) {
            fs.mkdirSync( dirPath, { recursive: true } )
        }

        return fs.createWriteStream( filePath, { flags: 'a' } );
    }

    /**
     * @param {string} filePath
     * @return {Object<string, string>}
     * @private
     */
    _loadDataFromStorage( filePath ) {
        if ( !fs.existsSync( filePath ) ) {
            return {};
        }

        const fileContent = fs.readFileSync( filePath, 'utf-8' );
        return fileContent
            .split( CSV_SEPARATOR )
            .filter( val => !!val )
            .map( KVPair => KVPair.split( KV_SEPARATOR ) )
            .reduce( ( cache, [ key, value ] ) => {
                cache[ key ] = value;
                return cache;
            }, {} );
    }

    /**
     * @param {string} key
     * @param {string} value
     * @private
     */
    _saveKVPair( key, value ) {
        this._fileStream.write( key + KV_SEPARATOR + value + CSV_SEPARATOR );
    }
}


module.exports = KeyValueFileStorage;
