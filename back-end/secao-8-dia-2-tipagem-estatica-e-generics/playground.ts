let cpfNumber: number | string = 12345678
cpfNumber = 'notFound'

// cpfNumber = true; // Bloqueia esse erro

let statusCode1: number[] = [200, 201, 404, 500];

let statusCode2: Array<number> = [200, 201, 404, 500];

// array que possua numeros e strings
let statusCode3: (number|string)[] = [200, 201, 404, 500, 'not_found', 'created'];

let statusCode4: Array<number|string> = [200, 201, 404, 500, 'not_found', 'created'];

let statusCode5: [number, string] = [200, 'OK']; // tupla

let arrStatusCode: [number, string][] = [];

arrStatusCode.push(statusCode5);
arrStatusCode.push([404, 'not_found']);

const numbers = [1, 2, 3, 4];
const persons = ['MD', 'Muri', 'Cacá', 'Nobre'];
const trueOrFalse = [true, false];
const numberAndLetters = ['a', 2, 3, 'b'];

function getRandomElement<T>(items: T[]):T {
  const index = Math.floor(Math.random() * items.length);
  return items[index];
};

const sortNumber = getRandomElement<number>(numbers);
const sortPerson = getRandomElement<string>(persons);
const sortBoolean = getRandomElement<boolean>(trueOrFalse);
const sortNumberAndLetter = getRandomElement<number|string>(numberAndLetters);

console.log({
  sortNumber,
  sortPerson,
  sortBoolean,
  sortNumberAndLetter,
});

type Address = {
  street: string;
  city: string;
  state: string;
};

interface IPerson { // interface
  name: string;
  birthDate: Date;
  email: string;
};

type TPerson = { // type alias
  name: string;
  birthDate: Date;
  // email?: string; // a ? torna opcional
  email: string;
  address: Address;
};

type Lawyer = {
  oab: string;
} & IPerson

interface Doctor extends TPerson {
  crm: string;
};

const tati: Lawyer = {
  name: 'Tati Alencar',
  birthDate: new Date('1987-05-26'),
  email: "tati@tati.com",
  oab: '1234',
};

const zambs: Doctor = {
  name: 'PR Zambeli',
  birthDate: new Date('1988-03-05'),
  email: 'zambs@zambs.com',
  address: {
    street: "Rodrigo Nilo",
    city: "Belo Horizonte",
    state: "MG"
  },
  crm: '1234',
};

class Calculator {
  public num1;
  public num2;
  constructor(num1:number, num2:number){
    this.num1 = num1;
    this.num2 = num2;
  }
  sum():number { return this.num1 + this.num2 }
  sub():number { return this.num1 - this.num2 }
  div():number { return this.num1 / this.num2 }
  mul():number { return this.num1 * this.num2 }
}
const calculator = new Calculator(2,2);

console.log(calculator.sum());
console.log(calculator.sub());
console.log(calculator.div());
console.log(calculator.mul());