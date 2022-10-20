"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Logger = /** @class */ (function () {
    function Logger(props) {
        this.output = props.output;
        this.type = props.type;
    }
    Logger.prototype.handleConsoleOutput = function (message) {
        // print message to console
        console.log(message);
    };
    Logger.prototype.handleTxtOutput = function (message) {
        // save message to log.txt file
    };
    Logger.prototype.handleJsonOutput = function (message) {
        // save message to log.json file
    };
    Logger.prototype.handleHtmlOutput = function (message) {
        // save message to log.html file
    };
    Logger.prototype.handleXmlOutput = function (message) {
        // save message to log.xml file
    };
    Logger.prototype.handleCsvOutput = function (message) {
        // save message to log.csv file
    };
    Logger.prototype.handlePdfOutput = function (message) {
        // save message to log.pdf file
    };
    return Logger;
}());
exports.default = Logger;
