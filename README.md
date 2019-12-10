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

