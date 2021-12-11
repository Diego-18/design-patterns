# Singleton 

The singleton design pattern is widely used at times when the instance of the class and the information it provides merits to be instantiated only once.

# Example (Ejemplo)

Singletons are useful in situations where system-wide actions need to be coordinated from a single central place. An example is a database connection pool. The pool manages the creation, destruction, and lifetime of all database connections for the entire application ensuring that no connections are 'lost'.

Singletons reduce the need for global variables which is particularly important in JavaScript because it limits namespace pollution and associated risk of name collisions. The Module pattern (see our Dofactory JS product) is JavaScript's manifestation of the Singleton pattern.

Several other patterns, such as, Factory, Prototype, and Façade are frequently implemented as Singletons when only one instance is needed. 

# Diagram

https://www.dofactory.com/img/diagrams/javascript/javascript-singleton.jpg