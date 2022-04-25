"use strict";
class BaseProfileBuilder {
    constructor() {
        this.object = this.createObject();
        this.thisPointer = this.getThisPointer();
    }
    withName(value) {
        this.object.name = value;
        return this.thisPointer;
    }
    build() {
        return this.object;
    }
}
class BaseProfile {
}
class ProfileBuilder extends BaseProfileBuilder {
    createObject() {
        return new Profile();
    }
    getThisPointer() {
        return this;
    }
    withAge(value) {
        this.object.age = value;
        return this;
    }
}
class Profile extends BaseProfile {
}
class CustomerBuilder extends BaseProfileBuilder {
    createObject() {
        return new Customer();
    }
    getThisPointer() {
        return this;
    }
    withEmail(value) {
        this.object.email = value;
        return this;
    }
}
class Customer extends BaseProfile {
}
let customer = new CustomerBuilder().withName('John')
    .withEmail('john@email.com')
    .build();
let profile = new ProfileBuilder().withName('John')
    .withAge(23)
    .build();
console.log(customer);
console.log(profile);
