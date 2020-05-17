const PROTOCOL_REGEX = /^(http|https):\/\//;

class UrlUtils {
    static isValidURL( url ) {
        try {
            new URL(url);
            return true
        } catch (e) {
            return false;
        }
    }

    static addProtocol( url ) {
        return  PROTOCOL_REGEX.test( url ) ? url : 'https://' + url;
    }
}

module.exports = UrlUtils;