const BaseDesing = require("./BaseDesing");                     // BaseDesing

class DesingTwo extends BaseDesing{                             // class DesingTwo
  run(role){                                                    // method run
    if(this.isMyResponsability(role)){                          // condition if for verify if the role is my responsability
      return "Design Two";
    }
    return this.next(role);
  }

  isMyResponsability(role){                                     // method isMyResponsability         
    return role == 2;
  }
}

module.exports = DesingTwo;                                     // export module       