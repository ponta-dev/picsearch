import log from 'loglevel'
import stringutil from '@/main/common/util/string-util'

function getLogLevel(level: string):log.LogLevelDesc {
    switch(level) {
        case "TRACE": //0
            return log.levels.TRACE;
        case "DEBUG": //1
            return log.levels.DEBUG;
        case "INFO": //2
            return log.levels.INFO;
        case "WARN": //3
            return log.levels.WARN;
        case "ERROR": //4
            return log.levels.ERROR;
        case "SILENT": //5
            return log.levels.SILENT;
        default:
            return log.levels.DEBUG;
    }
}

const factory = log.methodFactory;
log.methodFactory = function(methodName, loglevel, loggerName) {
    const rawMethod = factory(methodName, loglevel, loggerName)
    return function(...msg: any) {
        let str = stringutil.getAnyStr(" ", msg)
        rawMethod("["+ stringutil.getNowDateStr()+ "] "+ methodName.toUpperCase()+ " :"+ str);
    }
}

log.setLevel(getLogLevel(import.meta.env.VITE_LOG_LEVEL))
log.debug("loglevel setting: "+ import.meta.env.VITE_LOG_LEVEL + " set logger level: "+ log.getLevel());
