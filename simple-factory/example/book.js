class Book {                                            // static method to create a book (metodo estatico para crear un libro)
    constructor(database){                              // constructor (constructor)
      this._database = database;                        
    }

    create(){                                           // create a book (crear un libro)
      console.log("create");
    }
  
    update(){                                           // update a book (actualizar un libro)
      console.log("update");
    }
  
    delete(){                                          // delete a book (eliminar un libro)
      console.log("remove");
    }
  
    read(){                                            // read a book (leer un libro)
      console.log("read");
    }
  }
  
  module.exports = Book;                              // export the class (exportar la clase)