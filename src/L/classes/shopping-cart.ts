import { Discount } from "./discount";
import { CartItem } from "./interface/card-items";


export class ShoppingCartLegacy{ //classe que pode adicionar, remover, mostrar, calcular total e limpar items

  private readonly _items: CartItem[] = []

  constructor(private readonly discount: Discount){}//dependencia na hora de instanciar a classe vai passar uma instancia da classe do desconto como parametro na instancia dessa classe


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

  totalWithDiscount(): number{//ESSE METODO ESTA SENDO CHAMADO DE MANEIRA POLIMORFICA, PORQUE VC ESPERA QUE QUALQUER DISCONTO QUE É O PROPERTY QUE VC CRIOU DO TIPO DISCOUNT TENHA O METODO CALCULATE E FAÇA O CALCULO DO PREÇO TOTAL
    return this.discount.calculate(this.total()) //o property discount é do tipo da classe Discount, então ja que ele é do desse tipo consegue usar os metodos dessa classe, então do metodo calculate da classe discount estamos passando como parametro o preço total dos items
  }

  isEmpty(): boolean{
    return this._items.length === 0;
  }

  clear(): void{
    console.log('Carrinho de compras foi limpo')
    this._items.length = 0
  }

}

