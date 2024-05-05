const mimeTypes = require("../appModules/http-utils/mime-types");
const staticFile = require("../appModules/http-utils/static-file");
const path = require("path");

async function defaultRouteController(res,url) {
    const extname = String(path.extname(url)).toLocaleLowerCase();
    if (extname in mimeTypes) {
        staticFile(res, url, extname);
    } else {
        res.statusCode = 404;
        server.end("Not found");
    }
}

module.exports = defaultRouteController;