import { Component, OnInit,EventEmitter ,Output} from '@angular/core';
import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[]=[
    new Recipe('egg ','egg buejii','https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg'),
    new Recipe('egg burji ','tasty dish','https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg')

  ];

  @Output() recipewasSelected=new EventEmitter<Recipe>();
  constructor() { }

  onSelectedRecipe(recipe:Recipe){
    this.recipewasSelected.emit(recipe);
  }
  ngOnInit() {
  }

}
