"use strict";
// interface Animal {
//   say():void;
// }
class Dog {
    accept(visitor) {
        visitor.visitConcreteComponentA(this);
    }
    gogo() {
        console.log("go go");
    }
}
class Cat {
    accept(visitor) {
        visitor.visitConcreteComponentB(this);
    }
    meomeo() {
        console.log("meo meo");
    }
}
class ConcreteVisitor1 {
    visitConcreteComponentA(element) {
        element.gogo();
        console.log('ConcreteVisitor1');
    }
    visitConcreteComponentB(element) {
        element.meomeo();
        console.log(`ConcreteVisitor1`);
    }
}
class ConcreteVisitor2 {
    visitConcreteComponentA(element) {
        element.gogo();
        console.log(`ConcreteVisitor2`);
    }
    visitConcreteComponentB(element) {
        element.meomeo();
        console.log(`ConcreteVisitor2`);
    }
}
function clientCode(components, visitor) {
    for (const component of components) {
        component.accept(visitor);
    }
}
const components = [
    new Dog(),
    new Cat(),
];
const visitor1 = new ConcreteVisitor1();
clientCode(components, visitor1);
console.log('');
const visitor2 = new ConcreteVisitor2();
clientCode(components, visitor2);
