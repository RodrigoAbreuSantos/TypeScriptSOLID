//aqui é onde iniciamos a aplicação
/*
Módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem
depender de abstrações.
Dependa de abstrações, não de implementações.
Abstrações não devem depender de detalhes. Detalhes devem depender
de abstrações.

Classes de baixo nível são classes que executam tarefas (os detalhes)
Classes de alto nível são classes que gerenciam as classes de baixo nível.
*/

import { Messaging } from './services/messaging';
import { Order } from './classes/order';
import { Persistency } from './services/persistency';
import { Product } from './classes/product';
import { ShoppingCartLegacy } from './classes/shopping-cart';
import { FiftyPercentDiscount, TenPercentDiscount, NoDiscount } from './classes/discount';
import { IndividualCustomer, EnterpriseCustomer } from './classes/customer';
import { MessagingProtocol } from './classes/interface/messaging-protocol';


const discountFifty = new FiftyPercentDiscount()//instancia da classe filha da classe abstrata Discount
const discountTen = new TenPercentDiscount()
const noDiscount = new NoDiscount()
const shoppingCartLegacy = new ShoppingCartLegacy(discountFifty); //instancia da classe que dentro dela vai receber um topo de desconto
const message = new Messaging()
const persistency = new Persistency()
const indiviualCustomer = new IndividualCustomer('Luiz', 'Otavio', '5959504004');
const enterpriseCustomer = new EnterpriseCustomer('Bradesco', '182989292')

//Classe moque que vai fingir enviar um email
class MessagingMock implements MessagingProtocol {
  sendMessage(msg: string): void {
      console.log('A mensagem foi enviada pelo mock')
  }
}
const messagingMock = new MessagingMock()
//a classe order não esta nem ai o que vai vir aqui contanto que utilize o protocol do tipo MessagingProtocol que é uma interface
const order = new Order(shoppingCartLegacy, messagingMock, persistency, indiviualCustomer) //estancia da classe Order que recebe um card do tipo ShoppingCartLegacy


shoppingCartLegacy.addItem(new Product('Tv', 1000));
shoppingCartLegacy.addItem(new Product('Camiseta', 49.90))
shoppingCartLegacy.addItem(new Product('PS5', 2000))

console.log(shoppingCartLegacy.Itemns)
console.log(shoppingCartLegacy.total())
console.log(shoppingCartLegacy.totalWithDiscount())
console.log(order.orderStatus)
order.checkout()
console.log(order.orderStatus)



