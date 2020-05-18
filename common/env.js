const isProd = process.env.NODE_ENV === 'production';
const isDev = process.env.NODE_ENV === 'development';
const host = `http://localhost`;
const serverPort = isProd ? 8080 : 4321;
const frontendPort = isProd ? serverPort : 1234;

module.exports = {
    isProd,
    isDev,
    serverPort,
    frontendHost: host + ':' + frontendPort,
    serverHost: host + ':' + serverPort,
};
