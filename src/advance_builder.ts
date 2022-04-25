abstract class BaseProfileBuilder<T extends BaseProfile, B extends BaseProfileBuilder<T, B>> {
  protected object: T;
  protected thisPointer: B;

  protected abstract createObject(): T;

  protected abstract getThisPointer(): B;

  constructor() {
      this.object = this.createObject();
      this.thisPointer = this.getThisPointer();
  }

  withName(value: string): B {
      this.object.name = value;
      return this.thisPointer;
  }

  build(): T {
      return this.object;
  }
}

abstract class BaseProfile {
  name?: string;
}

class ProfileBuilder extends BaseProfileBuilder<Profile, ProfileBuilder> {
  createObject(): Profile {
      return new Profile();
  }

  getThisPointer(): ProfileBuilder {
      return this;
  }
  withAge(value: number): ProfileBuilder{
    this.object.age = value;
    return this;
  }
}

class Profile extends BaseProfile {
  age?:number;
}

class CustomerBuilder extends BaseProfileBuilder<Customer, CustomerBuilder>  {
  createObject(): Customer {
      return new Customer();
  }

  getThisPointer(): CustomerBuilder {
      return this;
  }

  withEmail(value: string): CustomerBuilder {
      this.object.email = value;
      return this;
  }
}

class Customer extends BaseProfile {
  email?: string;
}




let customer: Customer = new CustomerBuilder().withName('John')
                                            .withEmail('john@email.com')
                                            .build();
let profile:Profile = new ProfileBuilder().withName('John')
                                          .withAge(23)
                                          .build();

console.log(customer);
console.log(profile);