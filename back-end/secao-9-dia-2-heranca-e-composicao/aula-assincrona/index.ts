class Vehicle {
  constructor(public brand : string, private automaker: string) {}

  public speed(): string {
    console.log(`O ${this.brand} acelera!`);
    return `O ${this.brand} acelera!`;
  }
}

class Car extends Vehicle {
  constructor(brand: string, automaker: string) {
    super(brand, automaker);
  }

  public speed(): string {
    console.log(`Acelera o ${this.brand}!`);
    return super.speed() + `Acelera o ${this.brand}!`;
  }
}

const carro = new Car('Polo', 'VM');
carro.speed();

// implementado interfaces

interface Person {
  name: string;
  info: string;
}

class Student implements Person {
  constructor(
    public name: string,
    public school: string,
  ) { }

  get info() {
    return `${this.name} estuda no colégio ${this.school}`
  }
}

class Professor implements Person {
  constructor(
    public name: string,
    public school: string,
    public subject: string,
  ) { }

  get info() {
    return `${this.name} leciona ${this.subject} no colégio ${this.school}`
  }
}

function printInfo(person: Person) {
  console.log(person.info);
};

const student = new Student('João', 'EREMG');

const professor = new Professor('Maria', 'Marista', 'Sociologia');

printInfo(student);

printInfo(professor);

// criando uma composição

interface User {
  id?: number;
  name: string;
  age: number;
}

class UserModel {
  private database: User[] = [];
  private lastId = 0;

  create(user: User) {
    const newUser = { ...user, id: this.lastId++ }
    this.database.push(newUser);

    return newUser
  }

  getAll(): User[] {
    return [...this.database];
  }
}

class UserService {
  constructor(protected userModel: UserModel) { }

  create(user: User): User {
    if(user.age > 200) {
      throw new Error('Idade inválida!');      
    }
    return this.userModel.create(user);
  }

  getAll() {
    return this.userModel.getAll();
  }
}

const userModel = new UserModel();
const userService = new UserService(userModel);

const capi = userService.create({
  name: 'Capi',
  age: 120,
});

const andre = userService.create({
  name: 'André',
  age: 100,
});

console.log(userService.getAll());
