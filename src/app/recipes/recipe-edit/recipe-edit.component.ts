import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  id:number;
  editmode=false;
  recipeForm:FormGroup;

  constructor(private route:ActivatedRoute,
    private recipeservice:RecipeService,
    private router:Router) { }

  ngOnInit() {

    this.route.params.subscribe(
      (params:Params)=>{
        this.id=+params['id'];
        this.editmode=params['id']!=null;
        this.initForm();
      }

    );
  }

  onSubmit(){
    const newrecipe=new Recipe(
      this.recipeForm.value['name'],
      this.recipeForm.value['description'],
      this.recipeForm.value['imagePath'],
      this.recipeForm.value['ingredients']
      )
    if(this.editmode){
      this.recipeservice.updateRecipe(this.id,newrecipe);
    }
    else{
      this.recipeservice.addRecipe(newrecipe);
    }
    this.editmode=false;
    this.onCancel();
  }

  onAddIngredient(){
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name':new FormControl(null,Validators.required),
        'amount':new FormControl(null
          ,[Validators.required
          ,Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      })
    )
  }

  onDeleteIngredient(index:number){

    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }
  getControls() {
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }
  private initForm(){
    let recipename='';
    let recipeImgpath='';
    let recipeDesc=''
    let recipeIngredients=new FormArray([]);
   // console.log("editmode "+ this.editmode)
    if(this.editmode){
      const recipe=this.recipeservice.getRecipe(this.id);
      recipename=recipe.name;
      recipeImgpath=recipe.imagePath;
      recipeDesc=recipe.description;
      if(recipe['ingredients']){
        for(let ing of recipe.ingredients){
          recipeIngredients.push(
            new FormGroup({
              'name':new FormControl(ing.name,Validators.required),
              'amount':new FormControl(ing.amount
                ,[Validators.required
                ,Validators.pattern(/^[1-9]+[0-9]*$/)
              ])
            })
          )
        }
      }
    //  console.log(recipe);
    }


    
    
    this.recipeForm=new FormGroup({
      'name':new FormControl(recipename,Validators.required),
      'imagePath':new FormControl(recipeImgpath,Validators.required),
      'description':new FormControl(recipeDesc,Validators.required),
      'ingredients':recipeIngredients
    })
  }

  onCancel(){
   // this.recipeForm.reset();
    this.router.navigate(['../'],{relativeTo:this.route});

  }
}
