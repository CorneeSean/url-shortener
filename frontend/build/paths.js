const path = require('path');

const FRONTEND_PATH = './frontend/';
const SERVER_PUBLIC_PATH = './server/public/';

const commonPaths = {
    frontendDistDev: path.resolve(FRONTEND_PATH, 'dist-dev'),
    serverPublic: path.resolve(SERVER_PUBLIC_PATH),
    serverPublicRaw: SERVER_PUBLIC_PATH,
    frontendRaw: FRONTEND_PATH
};

const cleanUpPaths = [commonPaths.frontendDistDev, commonPaths.serverPublic];

module.exports = {
    ...commonPaths,
    cleanUpPaths
};