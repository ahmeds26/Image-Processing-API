"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var apiIndex_1 = __importDefault(require("./apiRoutes/apiIndex"));
var app = (0, express_1.default)();
var port = 3000;
app.use('/api', apiIndex_1.default, express_1.default.static('thumbnails'));
app.listen(port, function () {
    console.log("server started at http://localhost:".concat(port));
});
exports.default = app;
