import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router, Params } from '@angular/router';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe: Recipe;
  id:number



  constructor(private recipeservice: RecipeService,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit() {
    this.id=+this.route.snapshot.params['id'];
    this.recipe = this.recipeservice.getRecipe(this.id);
    this.route.params.subscribe(
      (params:Params)=>{
        this.recipe=this.recipeservice.getRecipe(+params['id']);
      }

    )
  }

  onAddToShoppingList(){
    this.recipeservice.addIngToShpList(this.recipe.ingredients);
  }

  onEditRecipe(){
      this.router.navigate(['edit'],{relativeTo:this.route});
  }

}
