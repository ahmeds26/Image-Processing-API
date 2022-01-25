"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var middleware = function (req, res, next) {
    var url = req.url;
    next();
};
exports.default = middleware;
