class BaseDesing{                                                 // class BaseDesing
  setNext(next){                                                  // method setNext
    this._next = next;
  }

  next(role){                                                     // method next               
    if(this._next){                                               // if this._next                 
      return this._next.run(role);
    }
    return "There are not Desing for role.";              
  }
}

module.exports = BaseDesing;                                      // export BaseDesing