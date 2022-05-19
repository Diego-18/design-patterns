let Book = require("./book");

class BookFactory{                      // Factory class (clase de fabricación)
  static make(){                        // Factory method (método de fabricación)
    return new Book();                  // Return new book (devuelve un nuevo libro)
  }

}
module.exports = BookFactory;         // Export factory (exporta la fabricación)