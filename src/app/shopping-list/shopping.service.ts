import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

export class ShoppingListService{

    startedEditIng=new Subject<number>();
    ingredients: Ingredient[]=[
        new Ingredient('apples',5),
        new Ingredient('eggs',10)
      ];

      newIngredientAdded=new EventEmitter<Ingredient>();

      addIngredient(ing:Ingredient){
          this.ingredients.push(ing);
      }

      updateIngredient(index:number,newIng:Ingredient){
        this.ingredients[index]=newIng;
      }

      deleteIngredient(index:number){
        this.ingredients.splice(index,1);
      }

      addIngToShoppingList(ing:Ingredient[]){
        this.ingredients.push(...ing);
      }

      getIngredient(index:number){
        return this.ingredients[index];
      }

    }