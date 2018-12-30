import { Component, OnInit,Output, ViewChild, ElementRef, EventEmitter, OnDestroy } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit,OnDestroy {

  @ViewChild('f') shoplistform:NgForm
  subscription: Subscription
 // @Output() ingredientsAdded=new EventEmitter<Ingredient>();
  constructor(private shoppingservice:ShoppingListService) { }
  editmode=false;
  editItemindex:number;
  editedItem:Ingredient;

  ngOnInit() {
   this.subscription= this.shoppingservice.startedEditIng.subscribe(
    (id:number)=>{
      this.editmode=true;
      this.editItemindex=id;
      this.editedItem=this.shoppingservice.getIngredient(id);
      this.shoplistform.setValue({
        name:this.editedItem.name,
        amount:this.editedItem.amount
      })
    }
    )
  }

  onSubmit(form:NgForm){
   
    const formval=form.value;
    const IngredientNew=new Ingredient(formval.name,formval.amount);
    if(this.editmode){
      this.shoppingservice.updateIngredient(this.editItemindex,IngredientNew)
      this.editmode=false;
    }
    else{
    this.shoppingservice.newIngredientAdded.emit(IngredientNew);
    }

    this.shoplistform.setValue({
      name:'',
      amount:''
    })
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  onClear(){
    this.shoplistform.reset();
    this.editmode=false;
  }

  onDelete(){
    this.shoplistform.reset();
    this.editmode=false;
    this.shoppingservice.deleteIngredient(this.editItemindex);
    
  }

}
