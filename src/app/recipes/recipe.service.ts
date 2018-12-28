import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping.service';

@Injectable()
export class RecipeService{
   private recipes: Recipe[]=[
        new Recipe(
        'egg ',
        'egg buejii',
        'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg',
       [new Ingredient('eggs',5),
        new Ingredient('chick',10)]),
        new Recipe(
        'egg burji ',
        'tasty dish',
        'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg',
        [new Ingredient('onions',5),
        new Ingredient('masala',10)])   
      ];

      getRecipes(){
          return this.recipes.slice();
      }

      getRecipe(id:number){
        return this.recipes[id];
      }

      selectedRecipe=new EventEmitter<Recipe>();

      constructor(private shoppingservice:ShoppingListService){

      }
      addIngToShpList(ing:Ingredient[]){
        this.shoppingservice.addIngToShoppingList(ing);
      }
}