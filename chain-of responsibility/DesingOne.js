const BaseDesing = require("./BaseDesing");                 // BaseDesing

class DesingOne extends BaseDesing{                         // class DesingOne extends BaseDesing
  run(role){                                                // method run (role)
    if(this.isMyResponsability(role)){
      return "Design One";
    }
    return this.next(role);
  }

  isMyResponsability(role){                                 // method isMyResponsability (role)
    return role == 1;
  }
}

module.exports = DesingOne;                               // export DesingOne                  