import { Component, OnInit,Output, ViewChild, ElementRef, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef:ElementRef;
  @ViewChild('amountInput') amountInputRef:ElementRef;
  
 // @Output() ingredientsAdded=new EventEmitter<Ingredient>();
  constructor(private shoppingservice:ShoppingListService) { }

  ngOnInit() {
  }

  onAddIngredients(){
    const ingname=this.nameInputRef.nativeElement.value;
    const ingamount=this.amountInputRef.nativeElement.value;

    const IngredientNew=new Ingredient(ingname,ingamount);
    this.shoppingservice.newIngredientAdded.emit(IngredientNew);
  }

}
