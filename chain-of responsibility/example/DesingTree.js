const BaseDesing = require("./BaseDesing");                     // BaseDesing

class DesingTree extends BaseDesing{                            // Class DesingTree
  run(role){                                                    // method run               
    if(this.isMyResponsability(role)){                          // if is my responsability
      return "Design Tree";
    }
    return this.next(role);
  }

  isMyResponsability(role){                                     // method is my responsability
    return role == 3;
  }
}

module.exports = DesingTree;                                    // export DesingTree                  