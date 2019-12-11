class WithMushroom extends AbstractToppingCreator {
    getPrice(): number {
        return this.base.getPrice() + 20;
    }
}