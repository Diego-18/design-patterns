class LogsFacade {                                                              // Class Logs
    constructor(logInstance){                                                   // Constructor
      this.logs = logInstance;
    }
  
    write(message){                                                             // Method write
      if(this.logs.checkPermissions() && this.logs.checkExistFolder()){         // If checkPermissions and checkExistFolder
        this.logs.generateLogName();                                            // Call generateLogName
        this.logs.write(message);                                               // Call write                                  
      }
    }
  }
  
  module.exports = LogsFacade;                                                  // Export LogsFacade