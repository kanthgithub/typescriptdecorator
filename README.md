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

