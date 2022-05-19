class ProductInternational {                                        //Class: ProductInternational (Decorator)
    constructor(product){                                           //Constructor: ProductInternational (Decorator)
      this.product = product;
    }
  
    getPrice(){                                                     //Method: getPrice (Decorator)
      return this.product.getPrice() + 50;
    } 
  
    getName(){                                                      //Method: getName (Decorator)
      return "Gaseosa Chinoto";
    }

    getDescription(){                                               //Method: getDescription (Decorator)
      return "Un sabor que te encantará. Pruebalá.";
    }
}
  
module.exports = ProductInternational;                              //Export: ProductInternational (Decorator)