type CartItem = {name: string, price: number}
type OrderStatus = 'open' | 'closed';

export class ShoppingCart { //classe de carrinho de compras
  //em um carrinho de compras precisa ter os itens, produtos etc

  private readonly _items: CartItem[] = [] //Seu item é do tipo CartItem que vai ter um array de objetos, e vai comecar vazio
  private _orderStaus: OrderStatus = 'open'; //essa propriedade vai ser do tipo open ou closed e vai inicar como open

  addItem(item: CartItem){ //vai receber o item como parametro e adicionar ele dentro do property _items
    this._items.push(item)
  }

  removeItem(index: number){
    this._items.splice(index, 1); //do indice que ele quer ele vai remover um elemento
  }

  get Itemns(): Readonly<CartItem[]>{ //vai retornar um array de produtos, mas ele não quer que esse array seja alterado
    return this._items
  }

  get orderStatus(): OrderStatus{
    return this._orderStaus
  }

  total(): number{
    return Number(this._items.reduce((soma, next) => soma + next.price, 0).toFixed(2)) //dentro do array vai pegar cada objeto e selcionar o price e com isso somar
  }

  checkout(){
    if (this.isEmpty()) {
      console.log('Seu carrinho esta vazio')
      return;
    }

    this._orderStaus = 'closed';
    this.sendMessage(`Seu pedido com total de: ${this.total()} foi recebido`);
    this.saveOrder();
    this.clear();
  }

  isEmpty(): boolean{
    return this._items.length === 0; //se for igual a zero quer dizer que esta vazio
  }

  sendMessage(msg: string): void{
    console.log('Mensagem Enviada: ', msg);
  }

  saveOrder(): void{
    console.log('Pedido Salvo com Sucesso')
  }

  clear(): void{
    console.log('Carrinho de compras foi limpo')
    this._items.length = 0 //vai limpar o carrinho
  }

}

const shoppingCart = new ShoppingCart();

shoppingCart.addItem({name: 'Tv', price: 1000}); //esta adiocnando items no carrinho
shoppingCart.addItem({name: 'Camiseta', price: 49.90})
shoppingCart.addItem({name: 'PS5', price: 2000})


console.log(shoppingCart.Itemns)

//shoppingCart.clear()//limpa o carrinho

console.log(shoppingCart.orderStatus)

shoppingCart.checkout()//checa situação do carrinho, depois ele mostra as mensagens e limpa o carrino, com isso consequentemente acaba mudando o estato do carrinho

console.log(shoppingCart.orderStatus)

//
