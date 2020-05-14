const fs = require('fs');
const paths = require('./paths.js');

paths.cleanUpPaths.forEach((cleanUpPath) => {
    if (!fs.existsSync(cleanUpPath)) {
        return;
    }
    fs.rmdirSync(cleanUpPath, {recursive: true});
});
