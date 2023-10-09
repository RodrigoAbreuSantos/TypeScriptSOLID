export abstract class Discount { //todos os descontos que vc quiser colocar vai criar aqui

  abstract calculate(value: number): number
}

export class FiftyPercentDiscount extends Discount {
  private readonly discount = 0.05  //criou o property discount que no metodo caluclate vai usar o valor total com o preço desse property para calcular o desconto

  calculate(price: number): number {
      return price - price * this.discount
  }

}

export class TenPercentDiscount extends Discount {
  private readonly discount = 0.10

  calculate(price: number): number {
      return price - price * this.discount
  }

}


export class NoDiscount extends Discount {
  private readonly discount = 0

  calculate(price: number): number {
      return price - price * this.discount
  }

}
//
