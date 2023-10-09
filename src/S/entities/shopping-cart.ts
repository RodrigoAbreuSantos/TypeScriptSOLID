import { CartItem } from "./interface/card-items";


export class ShoppingCartLegacy { //classe que pode adicionar, remover, mostrar, calcular total e limpar items

  private readonly _items: CartItem[] = []


  addItem(item: CartItem){
    this._items.push(item)
  }

  removeItem(index: number){
    this._items.splice(index, 1);
  }

  get Itemns(): Readonly<CartItem[]>{
    return this._items
  }


  total(): number{
    return Number(this._items.reduce((soma, next) => soma + next.price, 0).toFixed(2))
  }


  isEmpty(): boolean{
    return this._items.length === 0;
  }

  clear(): void{
    console.log('Carrinho de compras foi limpo')
    this._items.length = 0
  }

}

