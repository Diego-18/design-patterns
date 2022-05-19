const Product = require("./product");
const ProductInternational = require("./productInternational");

let product = new Product();                                                        // Create a new class with the country

function ProductCountry(country){                                                   // function ProductCountry
  if (country == "VE"){                                                             // if country is VE
    product = new ProductInternational(product);                                    // create a new class with the country (Decorator)
  }
  console.log(product.getPrice());                                                  // print the price
  console.log(product.getName());                                                   // print the name
  console.log(product.getDescription());                                            // print the description
}

// ProductCountry("USA");                                                           // call the function ProductCountry with the country USA
ProductCountry("VE");                                                               // call the function ProductCountry with the country VE