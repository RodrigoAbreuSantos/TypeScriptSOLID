import { CartItem } from "./card-items"

export interface ShoppingCartProtocol{ //interface que vai ser usada na classe shopping e na order

  addItem(item: CartItem): void

  removeItem(index: number): void

  total(): number

  totalWithDiscount(): number

  isEmpty(): boolean

  clear(): void

}


