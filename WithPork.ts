import AbstractToppingCreator from "./AbstractToppingCreator";
import HasPrice from "./HasPrice";

class WithPork extends AbstractToppingCreator {

    getPrice() {
        return this.base.getPrice() + 5;
    }
}

export = WithPork;