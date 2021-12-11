let BookFactory = require("./factory");

let book = BookFactory.make();              // book variable instantiated with the Book object (variable book instanciada con el objeto Book)
book.create();                              // book object created  (objeto book creado)
book.read();                                // book object read (objeto book leido)
book.update();                              // book object updated (objeto book actualizado)
book.delete();                              // book object deleted (objeto book borrado)
