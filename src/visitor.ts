// interface Animal {
//   say():void;
// }
 
// class Dog implements Animal {
//   gogo():void {console.log("go go")}
//   say(): void {
//     this.gogo()
//   }
// }
 
// class Cat implements Animal {
//   meomeo():void {console.log("meo meo")}
//   say():void { this.meomeo(); }
// }
 
// const dog:Animal = new Dog();
// dog.say()

// const cat:Animal = new Cat();
// cat.say()



 interface Animal {
  accept(visitor: Visitor): void;
}


class Dog implements Animal {
  
  public accept(visitor: Visitor): void {
      visitor.visitConcreteComponentA(this);
  }

  
  public gogo(): void {
      console.log("go go")
  }
}

class Cat implements Animal {
  
  public accept(visitor: Visitor): void {
      visitor.visitConcreteComponentB(this);
  }

  public meomeo(): void {
      console.log("meo meo")
  }
}


interface Visitor {
  visitConcreteComponentA(element: Dog): void;

  visitConcreteComponentB(element: Cat): void;
}


class ConcreteVisitor1 implements Visitor {
  public visitConcreteComponentA(element: Dog): void {
    element.gogo()
    console.log('ConcreteVisitor1');
  }

  public visitConcreteComponentB(element: Cat): void {
    element.meomeo()
    console.log(`ConcreteVisitor1`);
  }
}

class ConcreteVisitor2 implements Visitor {
  public visitConcreteComponentA(element: Dog): void {
    element.gogo()
    console.log(`ConcreteVisitor2`);
  }

  public visitConcreteComponentB(element: Cat): void {
    element.meomeo()
    console.log(`ConcreteVisitor2`);
  }
}


function clientCode(components: Animal[], visitor: Visitor) {

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