class WithPork extends AbstractToppingCreator {

    getPrice() {
        return this.base.getPrice() + 5;
    }
}