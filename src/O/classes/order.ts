import { OrderStatus } from "./interface/order-status";
import { Messaging } from "../services/messaging";
import { Persistency } from "../services/persistency";
import { ShoppingCartLegacy } from "./shopping-cart";

export class Order {
  private _orderStaus: OrderStatus = 'open';

  constructor(//isso se chama injeção de dependencias
    private readonly card: ShoppingCartLegacy,//da classe card pode acessar seus metodos ou property public
    private readonly message: Messaging,//da classe message pode acessar seus metodos ou property public
    private readonly persistency: Persistency//da classe persistency pode acessar seus metodos ou property public
    ){}//precisa injetar uma dependencia, um carrinho de compras aqui. Aqui esta falando que o atributo card é do tipo da classe ShoppingCartLegacy, com isso card tem acesso aos metodos da classe ShoppingCartLegacy

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
  }



}
