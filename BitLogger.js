var bitLogger = bitLogger || (function bitLoggerModule() {
    'use strict';
    
    /**
     * Represents a whitespace
     */
    const whitespace = ' ';
    
    /**
     * Represents an empty string
     */
    const empty = '';
    
    /**
     * Flags to indicate what is shown in the final message
     */
    const show = {
	date: true,
        time: true,
        level: true
    };
    
    /**
     * Gets the date and time in ISO format
     */
    function getDateTime() {
        let currentDate = new Date();
        let dateTime = currentDate
                .toISOString()
                .replace(/([T|Z]+)/g, whitespace)
                .replace(/([.][0-9]{1,3})/, empty)
                .trim()
                .split(whitespace);

        if (show.date && show.time) {
            return dateTime.join(whitespace);
        } else if (show.date) {
            return dateTime[0];
        } else if (show.time) {
            return dateTime[1];
        }
    }

    /**
     * Writes a message to the console
     * @param {*} level level of the message
     * @param {*} message message to be written
     */
    function write(level, message) {
        if (!level) {
            throw new TypeError('Level must be defined');
        }
    
        if (!message) {
            throw new TypeError('message must be defined');
        }

        if (typeof (message) !== 'string') {
            message = JSON.stringify(message);
        }

        console.log(`${(show.date || show.time ? `${getDateTime()} | ` : empty)}${(show.level ? `<${level}> - ` : empty)}${message}`);
    }

    /**
     * Writes a messages as critical
     * @param {*} message text or object to be logged
     */
    const critical = (message) => write('critical', message);
    
    /**
     * Writes a messages as error
     * @param {*} message text or object to be logged
     */
    const error = (message) => write('error', message);
    
    /**
     * Writes a messages as warning
     * @param {*} message text or object to be logged
     */
    const warning = (message) => write('warning', message);
    
    /**
     * Writes a messages as information
     * @param {*} message text or object to be logged
     */
    const information = (message) => write('information', message);
    
    /**
     * Writes a messages as verbose
     * @param {*} message text or object to be logged
     */
    const verbose = (message) => write('verbose', message);
    
    /**
     * Writes a messages as debug
     * @param {*} message text or object to be logged
     */
    const debug = (message) => write('debug', message);

    /**
     * Set of functionality exposed outside the module
     */
    const API = {
        critical: critical,
        error: error,
        warning: warning,
        information: information,
        verbose: verbose,
        debug: debug
    };
    return API;
})();
