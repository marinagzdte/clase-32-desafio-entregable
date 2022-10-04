import log4js from 'log4js';

const logConfig = {
    appenders: {
        info: { type: "console" },
        errFile: { type: "file", filename: "error.log" },
        warnFile: { type: "file", filename: "warn.log" },

        log: { type: 'logLevelFilter', appender: 'info', level: 'all' },
        errLog: { type: 'logLevelFilter', appender: 'errFile', level: 'error' },
        warnLog: { type: 'logLevelFilter', appender: 'warnFile', level: 'warn' },
    },
    categories: {
        default: {
            appenders: ['log', 'errLog', 'warnLog'],
            level: 'all'
        }
    }
}

log4js.configure(logConfig);
const logger = log4js.getLogger();

export default logger;
