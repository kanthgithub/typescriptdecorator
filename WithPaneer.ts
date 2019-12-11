import AbstractToppingCreator from "./AbstractToppingCreator";
import HasPrice from "./HasPrice";
class WithPaneer extends AbstractToppingCreator {

    getPrice(): number {
        return this.base.getPrice() + 12;
    }
    
}

export = WithPaneer;