import HasPrice from "./HasPrice"
import Ramen from "./Ramen"
import Spaghetti from "./Spaghetti"
import WithMushroom from "./WithMushroom"
import WithPork from "./WithPork"
import WithPaneer from "./WithPaneer"

var myOrder : Ramen = new Ramen();
myOrder = new WithMushroom(myOrder);
myOrder = new WithPaneer(myOrder);
myOrder = new WithPork(myOrder);

console.log(`total price is: {myOrder.getPrice()}`)
