abstract class AbstractToppingCreator implements ToppingCreator {
    protected base : HasPrice

    constructor(base: HasPrice) {
      this.base = base;
    }

   abstract getPrice(): number;
}