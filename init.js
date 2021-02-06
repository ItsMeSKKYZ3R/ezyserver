"use strict";
exports.__esModule = true;
exports.initServer = void 0;
var express = require("express");
var app = express();
function initServer(port, message) {
    app.listen(port);
    if (message)
        console.log(message);
    return {
        express: express,
        app: app
    };
}
exports.initServer = initServer;
