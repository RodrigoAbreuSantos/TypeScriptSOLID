//aqui é onde iniciamos a aplicação

//O = Principio de aberto e fechado ==> Modulos, classe, objetos e operações devem ser abertos para extensões, mas fechados para modificações

import { Messaging } from './services/messaging';
import { Order } from './classes/order';
import { Persistency } from './services/persistency';
import { Product } from './classes/product';
import { ShoppingCartLegacy } from './classes/shopping-cart';
import { FiftyPercentDiscount, TenPercentDiscount, NoDiscount } from './classes/discount';


const discountFifty = new FiftyPercentDiscount()//instancia da classe filha da classe abstrata Discount
const discountTen = new TenPercentDiscount()
const noDiscount = new NoDiscount()
const shoppingCartLegacy = new ShoppingCartLegacy(discountFifty); //instancia da classe que dentro dela vai receber um topo de desconto
const message = new Messaging()
const persistency = new Persistency()
const order = new Order(shoppingCartLegacy, message, persistency) //estancia da classe Order que recebe um card do tipo ShoppingCartLegacy


shoppingCartLegacy.addItem(new Product('Tv', 1000));
shoppingCartLegacy.addItem(new Product('Camiseta', 49.90))
shoppingCartLegacy.addItem(new Product('PS5', 2000))

console.log(shoppingCartLegacy.Itemns)
console.log(shoppingCartLegacy.total())
console.log(shoppingCartLegacy.totalWithDiscount())
console.log(order.orderStatus)
order.checkout()
console.log(order.orderStatus)



