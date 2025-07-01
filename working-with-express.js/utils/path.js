const path = require("path");

module.exports = path.dirname(process.mainModule.filename); // __dirname is the directory name of the current module
