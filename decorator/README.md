# Decorador

The Decorator pattern extends (decorates) an object’s behavior dynamically. The ability to add new behavior at runtime is accomplished by a Decorator object which ‘wraps itself’ around the original object. Multiple decorators can add or override functionality to the original object.

It improves the behavior of an existing functionality, it adds something additional to it, that is to say, it can continue to work whether it is used or not.

# Used

An example of a decorator is security management where business objects are given additional access to privileged information depending on the privileges of the authenticated user. For example, an HR manager gets to work with an employee object that has appended (i.e. is decorated with) the employee's salary record so that salary information can be viewed.

Decorators provide flexibility to statically typed languages by allowing runtime changes as opposed to inheritance which takes place at compile time. JavaScript, however, is a dynamic language and the ability to extend an object at runtime is baked into the language itself.

For this reason, the Decorator pattern is less relevant to JavaScript developers. In JavaScript the Extend and Mixin patterns subsume the Decorator pattern.

# Diagram

![Decorator](https://miro.medium.com/max/1158/1*dLEeP2PBPqv7hC8T3xsarQ.png)
