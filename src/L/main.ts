//aqui é onde iniciamos a aplicação

//L = Principio da substituição de Liskov ==> Se o(x) é uma propriedade demonstravel dos objetos x de tipo T. Então o(y) deve ser verdadeiro para objetos y de tipo S onde S é um subtipo de T. (Subtipos precisam ser substituiveis por seus tipos base)

//subtipos precisam ser substituidos por seus tipos base
//Se meu programa espera um Animal, algo do tipo Dog (que herda de Animal) deve servir como qualquer outro animal
//por exemplo se vc mudar os tipos de retorno do metodo calculate em cada classe filha vc vai estar quebrando esse principio. Quando vc precisa verificar o tipo de retorno fazendo um if por exemplo vc tambem esta quebrando esse principio

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



