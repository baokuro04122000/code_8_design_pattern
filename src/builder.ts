interface User{
  name:string;
  age:number;
}
class UserBuilder{
  private readonly _user:User;
  constructor(){
    this._user = {
      name:"",
      age:0
    }
  }
  name(name:string):UserBuilder{
    this._user.name = name;
    return this;
  }
  age(age:number):UserBuilder{
    this._user.age = age;
    return this
  }
  build(): User{
    return this._user
  }
}
const user:UserBuilder = new UserBuilder();
console.log(user.name("John").age(20).build())
// class Test{
//   constructor(){}
//   test():void{
//     console.log(this)
//   }
// }
// const test:Test = new Test();
// test.test();