import {AbstractToppingCreator} from "./AbstractToppingCreator";
import {HasPrice} from "./HasPrice";

class WithMushroom extends AbstractToppingCreator {
    getPrice(): number {
        return this.base.getPrice() + 20;
    }
}

export  {WithMushroom as WithMushroom};