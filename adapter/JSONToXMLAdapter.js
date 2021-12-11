class JSONToXMLAdapter{                                         // class JSONToXMLAdapter
    constructor(reader){                                        // constructor(reader)
      this.reader = reader;                                     
    }
    
    read(){                                                     // method read()
      const data = this.reader.read();                          // constant data for this.reader.read()
      //TODO: complex logic to convert to xml format 
      return "<xml>";
    }  
}
  
module.exports = JSONToXMLAdapter;                              // export JSONToXMLAdapter