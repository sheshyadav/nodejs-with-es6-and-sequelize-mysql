import logger from "node-file-logger";

const options = {
    timeZone: 'America/Los_Angeles',
    folderPath: '../../storage/logs/',      
    fileNameExtension: '.log',    
    dateFormat: 'YYYY_MM_D',
    timeFormat: 'h:mm:ss A',
}

logger.SetUserOptions(options);

logger.Info('Some informational log message');
export default logger;