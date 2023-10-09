//aqui é onde iniciamos a aplicação

//S = Principio Responsabilidade Unica ==> Uma classe deve ter apenas um motivo para mudar

import { Messaging } from './services/messaging';
import { Order } from './entities/order';
import { Persistency } from './services/persistency';
import { Product } from './entities/product';
import { ShoppingCartLegacy } from './entities/shopping-cart';

const shoppingCartLegacy = new ShoppingCartLegacy(); //instancia da classe
const message = new Messaging()
const persistency = new Persistency()
const order = new Order(shoppingCartLegacy, message, persistency) //estancia da classe Order que recebe um card do tipo ShoppingCartLegacy


shoppingCartLegacy.addItem(new Product('Tv', 1000));
shoppingCartLegacy.addItem(new Product('Camiseta', 49.90))
shoppingCartLegacy.addItem(new Product('PS5', 2000))
console.log(shoppingCartLegacy.Itemns)
console.log(order.orderStatus)
order.checkout()
console.log(order.orderStatus)
