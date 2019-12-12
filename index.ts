import {HasPrice} from "./HasPrice"
import {Ramen} from "./Ramen"
import {Spaghetti} from "./Spaghetti"
import {WithMushroom} from "./WithMushroom"
import {WithPork} from "./WithPork"
import {WithPaneer} from "./WithPaneer"

var myRamenOrder : Ramen = new Ramen();
myRamenOrder = new WithMushroom(myRamenOrder);
myRamenOrder = new WithPaneer(myRamenOrder);
myRamenOrder = new WithPork(myRamenOrder);

console.log(`total price of Ramen with Mushroom, Paneer and Pork Topping is: ${myRamenOrder.getPrice()}`)


var mySpaghettiOrder : Spaghetti = new Spaghetti();
mySpaghettiOrder = new WithMushroom(mySpaghettiOrder);
mySpaghettiOrder = new WithPaneer(mySpaghettiOrder);
mySpaghettiOrder = new WithPork(mySpaghettiOrder);

console.log(`total price of Spaghetti with Mushroom, Paneer and Pork Topping is: ${mySpaghettiOrder.getPrice()}`)
