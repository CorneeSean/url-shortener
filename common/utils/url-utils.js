const URL_REGEX = /^(((http|https):\/\/(www\.)?)|(www\.)).*\.(?<!www.)[a-zA-z]{2,}$/;
const PROTOCOL_REGEX = /^(http|https):\/\//;

class UrlUtils {
    static isValidURL( url ) {
        return URL_REGEX.test( url );
    }

    static addProtocol( url ) {
        return  PROTOCOL_REGEX.test( url ) ? url : 'https://' + url;
    }
}

module.exports = UrlUtils;