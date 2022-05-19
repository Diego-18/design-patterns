const DesignOne = require("./DesingOne");                   // Importing the design one
const DesignTwo = require("./DesingTwo");                   // Importing the design two
const DesignTree = require("./DesingTree");                 // Importing the design tree

const designOne = new DesignOne();                          // Creating the design one
const designTwo = new DesignTwo();                          // Creating the design two
const designTree = new DesignTree();                        // Creating the design tree

designOne.setNext(designTwo);                               // Setting the next design 
designTwo.setNext(designTree);                              

let role = 6;                                               // Setting the role    

const finalDesing = designOne.run(role);                    // Running the design

console.log(finalDesing);                                   // Printing the final desing