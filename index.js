"use strict";
exports.__esModule = true;
exports.ezyserver = void 0;
var init_1 = require("./init");
var ezyserver = /** @class */ (function () {
    function ezyserver(port, message) {
        this.port = port;
        if (message)
            this.message = message;
    }
    ezyserver.prototype.start = function () {
        if (this.message) {
            return init_1.initServer(this.port, this.message);
        }
        else {
            return init_1.initServer(this.port);
        }
    };
    return ezyserver;
}());
exports.ezyserver = ezyserver;
