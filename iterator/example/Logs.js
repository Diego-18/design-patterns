class Logs {                                                            // class Logs
    constructor(){                                                      // constructor 
      this._data = [];                                                  
      this.currentPointer = 0;                                          
    }
  
    fetchData(){                                                        // method fetchData
      this._data = [1,2,3,4,5];
    }
  
    next(){                                                             // method next                               
      let current = this._data[this.currentPointer];                    // current 
      this.currentPointer++;                                            // currentPointer
      return current;                                                   // return current
    }
    
    hasNext(){                                                          // method hasNext
      return this._data[this.currentPointer];                           // return _data[currentPointer]
    }
  }
  
  module.exports = Logs;                                                // export Logs