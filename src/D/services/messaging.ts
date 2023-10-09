import { MessagingProtocol } from "../classes/interface/messaging-protocol";

export class Messaging implements MessagingProtocol{//classe que vai ser usada na classe Order

  sendMessage(msg: string): void{
    console.log('Mensagem Enviada: ', msg);
  }

}
