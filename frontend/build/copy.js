const fs = require('fs');
const path = require('path');

const FRONTEND_PATH = './frontend/';
const PUBLIC_PATH = './server/public/';
const FILENAMES = {
    reactApp: 'url-shortener.app.js',
    widgetBootstrap: 'url-shortener.widget.js',
    styles: 'url-shortener.css',
    index: 'index.html',
};

const createPublicDest = filename => path.resolve(`${PUBLIC_PATH}${filename}`);

// Create /public if does not exist
if (!fs.existsSync(path.resolve(PUBLIC_PATH))) {
    fs.mkdirSync(path.resolve(PUBLIC_PATH));
}

// Copy files
fs.copyFileSync(path.resolve(FRONTEND_PATH + FILENAMES.reactApp), createPublicDest(FILENAMES.reactApp));
fs.copyFileSync(path.resolve(FRONTEND_PATH + FILENAMES.widgetBootstrap), createPublicDest(FILENAMES.widgetBootstrap));
fs.copyFileSync(path.resolve(FRONTEND_PATH + 'css/' + FILENAMES.styles), createPublicDest(FILENAMES.styles));
fs.copyFileSync(path.resolve(FRONTEND_PATH + FILENAMES.index), createPublicDest(FILENAMES.index));

console.log('Successfully copied files to /server/public!');
