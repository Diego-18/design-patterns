class AnalyticsLibrary{                                         // Class AnalyticsLibrary
    process(data){                                              // Method process
      this.validateData(data);                                  // Call validateData
      //TODO
    }
  
    validateData(data){                                         // Method validateData
      if(data.includes("xml")){                                 // If data includes "xml"
        console.log("data it's ok.");                                           
      }else{
        console.log('Data invalid');
      }
      
    }
  }
  
  module.exports = AnalyticsLibrary;                            // Export AnalyticsLibrary