"use strict";
import {
  addColors,
  createLogger as _createLogger,
  format as _format,
  transports as _transports,
} from "winston";
const logLevel = "verbose";

export let logger;

(function createLogger() {
  logger = _createLogger({
    transports: [
      new _transports.Console({
        level: logLevel,
        colorize: true,
        timestamp: function () {
          return new Date().toLocaleTimeString();
        },
        prettyPrint: true,
        format: _format.combine(_format.colorize(), _format.simple()),
      }),
    ],
  });

  addColors({
    error: "red",
    warn: "yellow",
    info: "cyan",
    debug: "green",
  });
})();

export const levels = {
  error: "error",
  warn: "warn",
  info: "info",
  http: "http",
  verbose: "verbose",
  debug: "debug",
  silly: "silly",
};
