let logInstance;                                        // Variable to hold the singleton instance (Variable para mantener la instancia singleton)

class Logs {                                            // Class Logs (Clase Logs)
    constructor(data){                                  // Constructor (Constructor)
        if(!logInstance){                               // If logInstance is not defined (Si logInstance no está definido)   
            logInstance = this;                         // Set logInstance to this (Definir logInstance como this)
            this._data = data;                          // Set data to data (Definir this.data como data)
        }else{                                          
            return logInstance;                         // Return logInstance (Devolver logInstance)
        }
    }

    get data(){                                         // Getter for data (Getter para data)
        return this._data;                              // Return data (Devolver data)
    }
}

console.log(new Logs("Patron Singleton").data);          
console.log(new Logs("Singleton").data);