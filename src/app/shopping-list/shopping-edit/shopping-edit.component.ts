import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from '../../ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {
  /**
   *
   */
  constructor(private shoppingListService : ShoppingListService) {
    
  }
  @ViewChild('Qty' ,{static:true}) QtyElRef;
  @Output() AddEvent = new EventEmitter<Ingredient>();
  onAddIngredian(name : HTMLInputElement){
        var obj = new Ingredient(name.value , this.QtyElRef.nativeElement.value);
        this.shoppingListService.onAddIngredian(obj);
        //this.AddEvent.emit(obj);
  }

}
