const fs = require('fs');
const path = require('path');

const paths = require('./paths.js');

const FILENAMES = {
    widgetBootstrap: 'url-shortener.widget.js',
};

// Copy files
fs.copyFileSync(
    path.resolve(paths.frontendRaw, FILENAMES.widgetBootstrap),
    path.resolve(paths.serverPublicRaw, FILENAMES.widgetBootstrap)
);

console.log('Successfully copied files to /server/public!');
