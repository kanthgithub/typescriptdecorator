# Solution for Menu Items:

## Given:

Alice has started a restaurant and created software the determine the price of all the items on the menu
She started by creating a class for each menu item so that the price can be calculated using an interface.

```js
interface HasPrice {
    getPrice(): number;
}

class Ramen implements HasPrice {
    getPrice() {
        return 5;
    }
}

class Spaghetti implements HasPrice {
    getPrice() {
        return 10;
    }
}
```

She then decided there should be topping so she used the decorator pattern.

```js
class RamenWithPork extends Ramen {
    getPrice() {
         super.getPrice() + 3;
    }
}
```

## Problem Statement-1:

This worked until she decided to expand the topping menu and it became too cumbersome to deal combinatorial amount of classes. How should she fix it?

### Design Flaw:

Decorator Pattern is a correct approach, but here in this case, for each Decoration, a new class is created
This results in thousands of classes or a class for each combination of Toppings

### Alternative:

1. Stick to Decorator-Pattern
2. Instead of creating a brand-new class for various decorations of main-item,
Create a Factory or AbstractCreator for Decorations, which take BaseClass as constructor argument
3. Each Decoration is equivalent to having a Class
3. This results in keeping a limit for maximum number of classes
4. Main-Menu-Item or BaseItem is decorated by Topping using ToppingCreator

 - Math: 
    - Assume <b>n</b> is the total number of Toppings
    - Then, <b>factorial(n)</b> ways of Topping Combination of Main-Menu-Item is possible

### Solution:

- Design-pattern: Decorator Pattern

- Decision Rationale: 

    - Menu Item flavours are dynamic
    - A Standard approach should be defined to support adding as many flavours possible as we can add to base  Item (Ramen, Pasta e.t.c)


  1. Base Interface:

   ```js
    interface HasPrice {
       getPrice(): number;
     }
    ```

  2. Menu-Item Implementation 1 : Ramen implements HasPrice

  ```js
   class Ramen implements HasPrice {
    getPrice() {
        return 5;
     }
   }
  ```
  
  3. Menu-Item Implementation 2 : Spaghetti implements HasPrice

  ```js
   class Spaghetti implements HasPrice {
     getPrice() {
        return 10;
     }
   }
  ```

Step-1: 

 1. Define an Interface for Flavour-Decorator
 2. Interface will inherit Base Interface (HasPrice)
 3. Any decoration will be done on BaseItem (BaseInterface)
 4. Additional decorations on top of existing decorations is also possible by chaining decorators

 #### Interface for Decorator:

 - Name: ToppingCreator 
 - Inheritance details: ToppingCreator extends HashPrice
    ```js
    interface ToppingCreator extends HashPrice{}
    ```

 #### Abstract Class for Decorator:

  - Name: AbstractToppingCreator
  - Inheritance: implements ToppingCreator
  - Constructor: Calls Super-Class's Constructor. In this Scenario, Super Class is HashPrice
    - Constructor part will set the parent 
  - Inheritance details: ToppingCreator extends HashPrice

    ```js
    interface AbstractToppingCreator implements ToppingCreator {
       protected base : HashPrice

       constructor(base: HashPrice) {
         this.base = base;
       }

       getPrice(): number;
     }
    ```

#### Topping Classes inheriting ToppingCreator:

- All Toppings will have their specific classes defined 
- Topping will inherit the behavior defined in AbstractToppingCreator

- Example:

   1. Topping-1:
       - ToppingName: WithPork
       - Topping will override the getPrice method of Base-Menu-Item
       - In the below scenario, base will change dynamically
       - If base is Spagetti, then after decoration with Pork makes base as Spagetti WithPork

   2. Topping-2:
      - ToppingName: WithPaneer
      - Topping will override the getPrice method of Base-Menu-Item
      - If base is Spagetti, then after decoration with Paneer makes base as Spagetti WithPaneer


    3. If Customer needs Chicken as well as Paneer, then decoration happens in sequence as mentioned below:
     - If item decorated above is decorated again with Paneer, then it makes the previous Item as   WithPork And WithPanner

```js
        class WithPork extends AbstractToppingCreator {
          getPrice() {
            return this.base.getPrice() + 5
          }
        } 
```

```js
       class WithPaneer extends AbstractToppingCreator {
          getPrice() {
           return this.base.getPrice() + 12
         }
       } 
 ```

```js
      class WithMushroom extends AbstractToppingCreator {
          getPrice() {
           return this.base.getPrice() + 20
         }
       } 
```

    4. usage of Topping With ToppingCreator:

```js
          let foodOrder: HasPrice = new Ramen();
          foodOrder = new WithPork(foodOrder);
          foodOrder = new WithPaneer(foodOrder);
```

       - Here foodOrder is a Main-Item to start with
       - In the subsequent steps, same base-Instance is decorated with multiple Toppings
       - foodOrder in line-173, shows foodOrder decorated by Pork using WithPork ()
       - foodOrder in line-174, shows foodOrder decorated by Panner using WithPaneer ()
          - After this topping, Ramen has 2 toppings : Pork and Paneer

    5. Conclusion: 
       - Decorator is used to limit the number of classes
       - Objects with different toppings are generated run-time


 ## How to Run:

  - index.ts contains Ramen and Spaghetti Orders with toppings created on top of base
  - feel free to change the code in index.ts to add more toppings or remove toppings

  ```js
  lakshmikanth-MacBook-Pro:typeScriptDecorator lakshmikanth$ tsc index.ts
  lakshmikanth-MacBook-Pro:typeScriptDecorator lakshmikanth$ node index.js
  ```

  - Output should be:

   ```
   total price of Ramen with Mushroom, Paneer and Pork Topping is: 42
   total price of Spaghetti with Mushroom, Paneer and Pork Topping is: 47
   ```

## Allergens to Toppings:





