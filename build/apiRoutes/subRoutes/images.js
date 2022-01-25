"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var resizeImage_1 = __importDefault(require("../../resizeImage"));
var path = require('path');
var fs = require('fs');
var folderName = 'thumbnails';
if (!fs.existsSync(path.resolve('inputFolder/' + folderName))) {
    fs.mkdirSync(path.resolve('inputFolder/' + folderName));
}
else { }
;
var images = express_1.default.Router();
images.get('/', function (req, res) {
    var imageName = req.query.filename;
    var width = req.query.width;
    var height = req.query.height;
    var currentName = imageName + '.jpg';
    var currentWidth = Number(width);
    var currentHeight = Number(height);
    var thumbFile = imageName + '_' + width + '_' + height + '.jpg';
    var thumbAbsolutePath = path.resolve('inputFolder/thumbnails/' + thumbFile);
    fs.access(thumbAbsolutePath, fs.constants.F_OK, function (err) {
        console.log('\n> Checking if the thumbnail exists');
        if (err) {
            console.error('Thumbnail does not exist...');
            console.log("\n> Creating Thumbnail with width: ".concat(width, " and height: ").concat(height));
            setTimeout(function () {
                res.sendFile(thumbAbsolutePath);
            }, 3000);
            (0, resizeImage_1.default)(currentName, currentWidth, currentHeight, thumbFile);
        }
        else {
            console.log('Thumbnail exists...');
            process.nextTick(function () {
                res.sendFile(thumbAbsolutePath);
            });
        }
    });
    //resizeImage(currentName, currentWidth, currentHeight, thumbFile);
});
exports.default = images;
