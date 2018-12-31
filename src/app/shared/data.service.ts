import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import { RecipeService } from '../recipes/recipe.service';

@Injectable()
export class dataService{

    constructor(private http:Http,private recipeservice:RecipeService){

        
    }

    storeRecipes(){
       return  this.http.put('https://restaurant-recipe-app.firebaseio.com/recipes.json',this.recipeservice.getRecipes());
    }

    getRecipes(){
       this.http.get('https://restaurant-recipe-app.firebaseio.com/recipes.json')
       .subscribe(
           (response:Response)=>{
                const recipes=response.json();
                this.recipeservice.setRecipes(recipes);

           }
       ) 
    }
}