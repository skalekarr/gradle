import ch.qos.logback.classic.encoder.PatternLayoutEncoder
import ch.qos.logback.classic.filter.ThresholdFilter

import static ch.qos.logback.classic.Level.*

def APP_LOG_PATH = System.getProperty("APP_LOG_PATH")
def WAS_ENV = System.getProperty("WAS_ENV")
if (!APP_LOG_PATH) {
    APP_LOG_PATH = "C:/data/tcserver/logs/react-basic-starter"
}

String transactionPattern = "%d{yyyy-MM-dd HH:mm:ss} %-5level %logger - %msg%n"

appender("STDOUT", ConsoleAppender) {
    encoder(PatternLayoutEncoder) {
        pattern = transactionPattern
    }
    filter(ThresholdFilter) {
        if (WAS_ENV == null || WAS_ENV.equalsIgnoreCase("UNIT")) {
            level = DEBUG
        } else {
            level = OFF
        }
    }
}

appender("LOGFILE", RollingFileAppender) {
    file = "${APP_LOG_PATH}/client-proxy.log"
    append = true
    rollingPolicy(FixedWindowRollingPolicy) {
        fileNamePattern = "${APP_LOG_PATH}/client-proxy.%i.log.zip"
        minIndex = 1
        maxIndex = 10
    }
    triggeringPolicy(SizeBasedTriggeringPolicy) {
        maxFileSize = "5MB"
    }
    encoder(PatternLayoutEncoder) {
        pattern = transactionPattern
    }
    filter(ThresholdFilter) {
        level = DEBUG
    }
}

logger("com.mutualofomaha.abc", DEBUG)
logger("com.netflix.zuul", INFO)

root(WARN, ["STDOUT", "LOGFILE"])