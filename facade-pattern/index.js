const AdvanceLogsLibrary = require("./AdvanceLogsLibrary");     // Importing AdvanceLogsLibrary
const LogsFacade = require("./LogsFacade");                     // Importing LogsFacade

let logsFacade = new LogsFacade(new AdvanceLogsLibrary());      // Creating LogsFacade object

logsFacade.write("this is an error");                           // Writing error log   (Error: this is an error)