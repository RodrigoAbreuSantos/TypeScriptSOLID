import { PersitencyProtocol } from "../classes/interface/persistency-prtocol";

export class Persistency implements PersitencyProtocol{ //classe que vai ser usada na classe Order
  saveOrder(): void{
    console.log('Pedido Salvo com Sucesso')
  }
}
