const Logs = require('./Logs');
const logs = new Logs();

logs.fetchData();                               

while(logs.hasNext()){                          // hasNext() is a method of the Logs class
  let currentLog = logs.next();                 // next() is a method of the Logs class
  
  console.log(currentLog);                      // prints the current log
}