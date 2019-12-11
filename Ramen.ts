import HasPrice from './HasPrice';

class Ramen implements HasPrice {
    getPrice() {
        return 5;
     }
   }

   export = Ramen;