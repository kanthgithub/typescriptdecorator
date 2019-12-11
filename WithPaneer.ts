class WithPaneer extends AbstractToppingCreator {

    getPrice(): number {
        return this.base.getPrice() + 12;
    }
    
}