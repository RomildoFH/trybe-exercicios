import axios from 'axios';
import { Product, User } from './types';

class ApiConsumer {
  public endpoint;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  async execute<T>(path: string) {
    const resultado = await axios.get<T>(this.endpoint + '/' + path);
    return resultado.data;
  };
}

const store: string = 'https://fakestoreapi.com';
const json: string = 'https://jsonplaceholder.typicode.com';

const storeConsumer = new ApiConsumer(store);
const userConsumer = new ApiConsumer(json);

storeConsumer.execute<Product[]>('/products').then((products) => console.log(products));
storeConsumer.execute<Product>('/products/1').then((product) => console.log(product));

storeConsumer.execute<User[]>('/users').then((users) => console.log(users));
storeConsumer.execute<User>('/users/1').then((user) => console.log(user));