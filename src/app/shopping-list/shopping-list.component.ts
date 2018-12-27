import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
 // providers:[ShoppingListService]
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[]

  constructor(private shoppingservice:ShoppingListService) { }

  ngOnInit() {
    
    this.ingredients=this.shoppingservice.ingredients
    
    this.shoppingservice.newIngredientAdded.subscribe(
      (ingredient:Ingredient)=>{
        console.log("in subscribe"+ ingredient.name+ " "+ingredient.amount)
         this.shoppingservice.addIngredient(ingredient);
      }
    )

   
    
  }

  

}
