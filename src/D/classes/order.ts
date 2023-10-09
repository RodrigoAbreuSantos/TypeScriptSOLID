import { OrderStatus } from "./interface/order-status";
import { CustomerOrder } from "./interface/customer-protocol";
import { ShoppingCartProtocol } from "./interface/shopping-cart-protocol";
import { MessagingProtocol } from "./interface/messaging-protocol";
import { PersitencyProtocol } from "./interface/persistency-prtocol";

export class Order {
  private _orderStaus: OrderStatus = 'open';

  constructor(//isso se chama injeção de dependencias
    private readonly card: ShoppingCartProtocol,//esta dependendo da interface agora e não da classe
    private readonly message: MessagingProtocol,//esta dependendo da interface agora e não da classe
    private readonly persistency: PersitencyProtocol,//esta dependendo da interface agora e não da classe
    private readonly customer: CustomerOrder//esta dependendo da interface agora e não da classe
    ){}//precisa injetar uma dependencia, um carrinho de compras aqui. Aqui esta falando que o atributo card é do tipo da interface ShoppingCartProtocol, com isso card tem acesso aos metodos da interface ShoppingCartProtocol

  get orderStatus(): OrderStatus{
    return this._orderStaus
  }

  checkout(){
    if (this.card.isEmpty()) {//Esta classe na propriedade card que é do tipo da classe ShoppingCartLegacy esta pegando o metodo da classe ShoppingCartLegacy
      console.log('Seu carrinho esta vazio')
      return;
    }

    this._orderStaus = 'closed';
    this.message.sendMessage(`Seu pedido com total de: ${this.card.totalWithDiscount()} foi recebido`); //metodo da classe Messaging
    this.persistency.saveOrder(); //metodo da classe Persistency
    this.card.clear(); //metodo da classe ShoppingCartLegacy
    console.log(`O cliente é ${this.customer.getName()} ${this.customer.getIDN()}`)
  }



}
