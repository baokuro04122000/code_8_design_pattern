"use strict";
class UserBuilder {
    constructor() {
        this._user = {
            name: "",
            age: 0
        };
    }
    name(name) {
        this._user.name = name;
        return this;
    }
    age(age) {
        this._user.age = age;
        return this;
    }
    build() {
        return this._user;
    }
}
const user = new UserBuilder();
console.log(user.name("John").age(20).build());
// class Test{
//   constructor(){}
//   test():void{
//     console.log(this)
//   }
// }
// const test:Test = new Test();
// test.test();
