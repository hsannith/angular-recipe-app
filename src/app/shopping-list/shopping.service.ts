import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService{

    ingredients: Ingredient[]=[
        new Ingredient('apples',5),
        new Ingredient('eggs',10)
      ];

      newIngredientAdded=new EventEmitter<Ingredient>();

      addIngredient(ing:Ingredient){
          this.ingredients.push(ing);
      }

      addIngToShoppingList(ing:Ingredient[]){
        this.ingredients.push(...ing);
      }

    }