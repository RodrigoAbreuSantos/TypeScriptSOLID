import { CartItem } from "./interface/card-items";

export class Product implements CartItem{ //classe que recebe os campos da interface 
  constructor(public name: string, public price: number){}
}
