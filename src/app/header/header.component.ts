import {Component} from '@angular/core';
import { dataService } from '../shared/data.service';
import { Recipe } from '../recipes/recipe.model';
import { Response} from '@angular/http';
@Component({

    selector:'app-header',
    templateUrl:'./header.component.html'


})
export class HeaderComponent{

   constructor(private ds:dataService){}
    onSaveData(){
        this.ds.storeRecipes().subscribe(
            (response:Response)=>{
                console.log(response);
            }
        )
    }

    onFetchData(){
        this.ds.getRecipes();
    }
}