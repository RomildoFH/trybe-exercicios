import axios from 'axios';
import { Product, User } from './types';

async function execute<T>(endpoint:string) {
  const resultado = await axios.get<T>(endpoint);
  return resultado.data;
};

const store: string = 'https://fakestoreapi.com';
const json: string = 'https://jsonplaceholder.typicode.com';

execute<Product[]>(store + '/products').then((products) => console.log(products));
execute<Product>(store + '/products/1').then((product) => console.log(product));

execute<User[]>(json+'/users').then((users) => console.log(users));
execute<User>(json+'/users/1').then((user) => console.log(user));